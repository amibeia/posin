'use client'

import CategoryCard from '@/components/category/category-card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import { CategoryName } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useCategories } from '@/store/category'

interface CategoryCardListProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function CategoryCardList(props: CategoryCardListProps) {
	const categories = useCategories()

	return (
		<ScrollArea {...props}>
			<section className="flex items-center gap-2">
				{categories.map((category, index) => (
					<CategoryCard
						key={category.id}
						category={{ ...category, name: category.name as CategoryName }}
						className={cn(categories.length - 1 === index && 'mr-4')}
					/>
				))}
			</section>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	)
}
