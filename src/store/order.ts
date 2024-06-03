import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { PREFIX_ORDER_ID } from '@/lib/constants'
import { AddOrderArgs, Order } from '@/lib/types'
import { nanoid } from '@/lib/utils'

type OrderState = {
	orders: Order[]
}

type OrderActions = {
	actions: {
		addOrder: (args: AddOrderArgs) => void
	}
}

const initialState: OrderState = {
	orders: [],
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
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						],
					})),
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
export const useOrderActions = () => orderStore((state) => state.actions)
