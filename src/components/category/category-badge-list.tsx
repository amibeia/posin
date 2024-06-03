'use client'

import CategoryBadge from '@/components/category/category-badge'

import { CartItem, Category } from '@/lib/types'
import { useCategories } from '@/store/category'

interface CategoryBadgeListProps {
	items: CartItem[]
}

export default function CategoryBadgeList({ items }: CategoryBadgeListProps) {
	const categories = useCategories()

	const totalCategories: (Category & { total: number })[] = categories.map(
		(category) => ({
			...category,
			total: items.reduce((value, item) => {
				return item.product.categoryId === category.id ? value + 1 : value
			}, 0),
		}),
	)

	return (
		<section className="flex flex-wrap items-center gap-2">
			{totalCategories
				.filter((category) => category.total !== 0)
				.map((category) => (
					<CategoryBadge
						key={category.id}
						name={category.name}
						color={category.color}
						total={category.total}
					/>
				))}
		</section>
	)
}
