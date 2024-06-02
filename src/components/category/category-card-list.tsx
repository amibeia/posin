import CategoryCard from '@/components/category/category-card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import categories from '@/data/categories.json'
import { CategoryName } from '@/lib/types'
import { cn } from '@/lib/utils'

interface CategoryCardListProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function CategoryCardList(props: CategoryCardListProps) {
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
