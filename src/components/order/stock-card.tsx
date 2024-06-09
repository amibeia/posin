'use client'

import { Circle, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Product } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useCategories } from '@/store/category'
import { useOrderActions } from '@/store/order'

interface StockCardProps extends React.ComponentPropsWithoutRef<'div'> {
	stock: Product
}

export default function StockCard({
	stock,
	className,
	...props
}: StockCardProps) {
	const categories = useCategories()
	const orderActions = useOrderActions()

	const stockCategory = categories.find(
		(category) => category.id === stock.categoryId,
	)!

	return (
		<div
			className={cn(
				'flex items-center justify-between gap-4 rounded-xl border border-input bg-background p-4 shadow-sm',
				className,
			)}
			{...props}
		>
			<div className="flex items-center gap-2">
				<Circle
					style={{
						fill: stockCategory.color,
					}}
					className="size-4 shrink-0"
				/>
				<span className="text-sm">{stock.name}</span>
			</div>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => orderActions.removeProductFromStock(stock.id)}
				className="size-6 shrink-0"
			>
				<Trash className="size-4 shrink-0" />
			</Button>
		</div>
	)
}
