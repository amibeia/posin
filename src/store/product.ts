import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import products from '@/data/products.json'
import { Product } from '@/lib/types'

type ProductState = {
	products: Product[]
}

const initialState: ProductState = {
	products,
}

const productStore = create<ProductState>()(
	persist(
		() => ({
			...initialState,
		}),
		{
			name: 'product-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				products: state.products,
			}),
		},
	),
)

export const useProducts = () => productStore((state) => state.products)
