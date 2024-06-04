import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import products from '@/data/products.json'
import { PREFIX_PRODUCT_ID } from '@/lib/constants'
import { AddProductArgs, Product } from '@/lib/types'
import { nanoid } from '@/lib/utils'

type ProductState = {
	products: Product[]
}

type ProductActions = {
	actions: {
		addProduct: (args: AddProductArgs) => void
	}
}

const initialState: ProductState = {
	products,
}

const productStore = create<ProductState & ProductActions>()(
	persist(
		(set) => ({
			...initialState,
			actions: {
				addProduct: ({ name, price, categoryId }) =>
					set((state) => ({
						products: [
							...state.products,
							{
								id: nanoid({
									prefix: PREFIX_PRODUCT_ID,
								}),
								name,
								price,
								categoryId,
							},
						],
					})),
			},
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
export const useProductActions = () => productStore((state) => state.actions)
