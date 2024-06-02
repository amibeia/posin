import { Circle } from 'lucide-react'

import categories from '@/data/categories.json'
import { Product } from '@/lib/types'
import { cn, rupiah } from '@/lib/utils'

interface ProductCardProps extends React.ComponentPropsWithoutRef<'div'> {
	product: Product
}

export default function ProductCard({
	product,
	className,
	...props
}: ProductCardProps) {
	const productCategory = categories.find(
		(category) => category.id === product.categoryId,
	)!

	return (
		<div
			className={cn(
				'flex items-center justify-between gap-4 rounded-xl border border-input bg-background p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground',
				className,
			)}
			{...props}
		>
			<div className="flex items-center gap-2">
				<Circle
					style={{ fill: productCategory.color }}
					className="size-4 shrink-0"
				/>
				<span className="text-sm">{product.name}</span>
			</div>
			<span className="text-sm font-bold">{rupiah(product.price)}</span>
		</div>
	)
}
