import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import {
	DEFAULT_HAS_SHIPPED,
	DEFAULT_IS_NEED_SHIPPED,
	DEFAULT_PAYMENT_METHOD,
	PREFIX_ORDER_ID,
} from '@/lib/constants'
import { AddOrderArgs, Order, PaymentMethod } from '@/lib/types'
import { nanoid } from '@/lib/utils'

type OrderState = {
	orders: Order[]
	order: Pick<Order, 'isNeedShipped' | 'paymentMethod'>
}

type OrderActions = {
	actions: {
		addOrder: (args: AddOrderArgs) => void
		changePaymentMethod: (paymentMethod: PaymentMethod) => void
		toggleNeedShipped: () => void
		shipOrder: (id: Order['id']) => void
		reset: () => void
	}
}

const initialState: OrderState = {
	orders: [],
	order: {
		isNeedShipped: DEFAULT_IS_NEED_SHIPPED,
		paymentMethod: DEFAULT_PAYMENT_METHOD,
	},
}

const orderStore = create<OrderState & OrderActions>()(
	persist(
		(set) => ({
			...initialState,
			actions: {
				addOrder: ({ items }) =>
					set((state) => ({
						orders: [
							...state.orders,
							{
								id: nanoid({ prefix: PREFIX_ORDER_ID }),
								items,
								isNeedShipped: state.order.isNeedShipped,
								hasShipped: DEFAULT_HAS_SHIPPED,
								paymentMethod: state.order.paymentMethod,
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						],
					})),
				changePaymentMethod: (paymentMethod) =>
					set((state) => ({ order: { ...state.order, paymentMethod } })),
				toggleNeedShipped: () =>
					set((state) => ({
						order: {
							...state.order,
							isNeedShipped: !state.order.isNeedShipped,
						},
					})),
				shipOrder: (id) =>
					set((state) => ({
						orders: state.orders.map((order) => {
							return order.id === id ? { ...order, hasShipped: true } : order
						}),
					})),
				reset: () => set(() => ({ order: initialState.order })),
			},
		}),
		{
			name: 'order-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ orders: state.orders }),
		},
	),
)

export const useOrders = () => orderStore((state) => state.orders)
export const useOrder = () => orderStore((state) => state.order)
export const useOrderActions = () => orderStore((state) => state.actions)
