'use client'

import { Circle } from 'lucide-react'
import { useState } from 'react'

import { Product } from '@/lib/types'
import { cn, lightenColor, rupiah } from '@/lib/utils'
import { useCart, useCartActions } from '@/store/cart'
import { useCategories } from '@/store/category'

interface ProductCardProps extends React.ComponentPropsWithoutRef<'div'> {
	product: Product
}

export default function ProductCard({
	product,
	className,
	...props
}: ProductCardProps) {
	const [isHovered, setIsHovered] = useState(false)
	const categories = useCategories()
	const cart = useCart()
	const cartActions = useCartActions()

	const productCategory = categories.find(
		(category) => category.id === product.categoryId,
	)!

	const isProductSelected = cart.find((item) => item.product.id === product.id)

	return (
		<div
			style={{
				color: isHovered
					? 'hsl(var(--accent-foreground))'
					: 'hsl(var(--foreground))',
				backgroundColor:
					isProductSelected && isHovered
						? lightenColor(productCategory.color, 30)
						: isProductSelected && !isHovered
							? lightenColor(productCategory.color, 50)
							: !isProductSelected && isHovered
								? 'hsl(var(--accent))'
								: 'hsl(var(--background))',
			}}
			className={cn(
				'flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-input p-4 shadow-sm transition-colors',
				className,
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => cartActions.toggleItem(product)}
			{...props}
		>
			<div className="flex items-center gap-2">
				<Circle
					style={{
						fill:
							isProductSelected && isHovered
								? productCategory.color
								: isProductSelected && !isHovered
									? lightenColor(productCategory.color, 20)
									: !isProductSelected && isHovered
										? lightenColor(productCategory.color, 30)
										: lightenColor(productCategory.color, 50),
					}}
					className="size-4 shrink-0"
				/>
				<span className="text-sm">{product.name}</span>
			</div>
			<span className="text-sm font-bold">{rupiah(product.price)}</span>
		</div>
	)
}
