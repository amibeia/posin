import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Cart, Product } from '@/lib/types'

type CartState = {
	cart: Cart
}

type CartActions = {
	actions: {
		toggleItem: (product: Product) => void
	}
}

const initialState: CartState = {
	cart: [],
}

const cartStore = create<CartState & CartActions>()(
	persist(
		(set) => ({
			...initialState,
			actions: {
				toggleItem: (product) =>
					set((state) => {
						const isProductSelected = Boolean(
							state.cart.find((item) => item.product.id === product.id),
						)

						const nextCart = isProductSelected
							? state.cart.filter((item) => item.product.id !== product.id)
							: [...state.cart, { product, quantity: 1 }]

						return {
							cart: nextCart,
						}
					}),
			},
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ cart: state.cart }),
		},
	),
)

export const useCart = () => cartStore((state) => state.cart)
export const useCartActions = () => cartStore((state) => state.actions)
