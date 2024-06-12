import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import {
	DEFAULT_IS_NEED_SHIPPED,
	DEFAULT_PAYMENT_METHOD,
	DEFAULT_TRANSPORTATION_METHOD,
	PREFIX_ORDER_ID,
} from '@/lib/constants'
import {
	AddOrderArgs,
	Order,
	PaymentMethod,
	Product,
	TransportationMethod,
} from '@/lib/types'
import { nanoid } from '@/lib/utils'

type OrderState = {
	orders: Order[]
	stocks: Product[]
	order: Pick<Order, 'transportationMethod' | 'paymentMethod'> & {
		isNeedShipped: boolean
	}
}

type OrderActions = {
	actions: {
		addOrder: (args: AddOrderArgs) => void
		changePaymentMethod: (paymentMethod: PaymentMethod) => void
		changeTransportationMethod: (
			transportationMethod: TransportationMethod,
		) => void
		toggleNeedShipped: () => void
		shipOrder: (id: Order['id']) => void
		toggleStock: (product: Product) => void
		removeProductFromStock: (id: Product['id']) => void
		reset: () => void
	}
}

const initialState: OrderState = {
	orders: [],
	stocks: [],
	order: {
		isNeedShipped: DEFAULT_IS_NEED_SHIPPED,
		transportationMethod: null,
		paymentMethod: DEFAULT_PAYMENT_METHOD,
	},
}

const orderStore = create<OrderState & OrderActions>()(
	persist(
		(set) => ({
			...initialState,
			actions: {
				addOrder: ({ items, customer = null }) =>
					set((state) => ({
						orders: [
							...state.orders,
							{
								id: nanoid({ prefix: PREFIX_ORDER_ID }),
								items,
								customer,
								address: customer ? customer.address : null,
								hasShipped: state.order.isNeedShipped ? false : true,
								transportationMethod: state.order.transportationMethod,
								paymentMethod: state.order.paymentMethod,
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						],
					})),
				changePaymentMethod: (paymentMethod) =>
					set((state) => ({ order: { ...state.order, paymentMethod } })),
				changeTransportationMethod: (transportationMethod) =>
					set((state) => ({ order: { ...state.order, transportationMethod } })),
				toggleNeedShipped: () =>
					set((state) => {
						const nextIsNeedShipped = !state.order.isNeedShipped

						return {
							order: {
								...state.order,
								isNeedShipped: nextIsNeedShipped,
								transportationMethod: nextIsNeedShipped
									? DEFAULT_TRANSPORTATION_METHOD
									: null,
							},
						}
					}),
				shipOrder: (id) =>
					set((state) => ({
						orders: state.orders.map((order) => {
							return order.id === id ? { ...order, hasShipped: true } : order
						}),
					})),
				toggleStock: (product) =>
					set((state) => {
						const isStockSelected = state.stocks.find(
							(stock) => stock.id === product.id,
						)

						return {
							stocks: isStockSelected
								? state.stocks.filter((stock) => stock.id !== product.id)
								: [...state.stocks, product],
						}
					}),
				removeProductFromStock: (id) =>
					set((state) => ({
						stocks: state.stocks.filter((stock) => stock.id !== id),
					})),
				reset: () => set(() => ({ order: initialState.order })),
			},
		}),
		{
			name: 'order-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ orders: state.orders, stocks: state.stocks }),
		},
	),
)

export const useOrders = () => orderStore((state) => state.orders)
export const useStocks = () => orderStore((state) => state.stocks)
export const useOrder = () => orderStore((state) => state.order)
export const useOrderActions = () => orderStore((state) => state.actions)
