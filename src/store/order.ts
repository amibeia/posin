import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { DEFAULT_PAYMENT_METHOD, PREFIX_ORDER_ID } from '@/lib/constants'
import { AddOrderArgs, Order, PaymentMethod } from '@/lib/types'
import { nanoid } from '@/lib/utils'

type OrderState = {
	orders: Order[]
	order: {
		paymentMethod: PaymentMethod
	}
}

type OrderActions = {
	actions: {
		addOrder: (args: AddOrderArgs) => void
		changePaymentMethod: (paymentMethod: PaymentMethod) => void
		reset: () => void
	}
}

const initialState: OrderState = {
	orders: [],
	order: {
		paymentMethod: DEFAULT_PAYMENT_METHOD,
	},
}

const orderStore = create<OrderState & OrderActions>()(
	persist(
		(set) => ({
			...initialState,
			actions: {
				addOrder: ({ items, paymentMethod }) =>
					set((state) => ({
						orders: [
							...state.orders,
							{
								id: nanoid({ prefix: PREFIX_ORDER_ID }),
								items,
								paymentMethod,
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						],
					})),
				changePaymentMethod: (paymentMethod) =>
					set((state) => ({ order: { ...state.order, paymentMethod } })),
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
