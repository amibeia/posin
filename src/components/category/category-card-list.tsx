'use client'

import CategoryCard from '@/components/category/category-card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

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
						category={category}
						className={cn(
							index === 0 && 'ml-4',
							index === categories.length - 1 && 'mr-4',
						)}
					/>
				))}
			</section>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	)
}
