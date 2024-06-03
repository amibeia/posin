import { create } from 'zustand'

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

const orderStore = create<OrderState & OrderActions>()((set) => ({
	...initialState,
	actions: {
		addOrder: ({ cart }) =>
			set((state) => ({
				orders: [
					...state.orders,
					{
						id: nanoid({ prefix: PREFIX_ORDER_ID }),
						cart,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
				],
			})),
	},
}))

export const useOrders = () => orderStore((state) => state.orders)
export const useOrderActions = () => orderStore((state) => state.actions)
