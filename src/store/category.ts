import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import categories from '@/data/categories.json'
import { Category } from '@/lib/types'

type CategoryState = {
	categories: Category[]
}

const initialState: CategoryState = {
	categories: categories.sort((a, b) =>
		a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
	),
}

const categoryStore = create<CategoryState>()(
	persist(
		() => ({
			...initialState,
		}),
		{
			name: 'category-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				categories: state.categories,
			}),
		},
	),
)

export const useCategories = () => categoryStore((state) => state.categories)
