'use client'

import { Circle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { DEFAULT_ORDER_TYPE, ORDER_TYPE_PARAMS } from '@/lib/constants'
import { OrderType, Product } from '@/lib/types'
import { cn, lightenColor, rupiah } from '@/lib/utils'
import { useCart, useCartActions } from '@/store/cart'
import { useCategories } from '@/store/category'
import { useOrderActions, useStocks } from '@/store/order'

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
	const stocks = useStocks()
	const cartActions = useCartActions()
	const orderActions = useOrderActions()

	const searchParams = useSearchParams()

	const orderTypeParams =
		(searchParams.get(ORDER_TYPE_PARAMS) as OrderType) || DEFAULT_ORDER_TYPE
	const isCustomerOrder = orderTypeParams === 'customer-order'
	const isProductSelected = isCustomerOrder
		? cart.find((item) => item.product.id === product.id)
		: stocks.find((stock) => stock.id === product.id)
	const productCategory = categories.find(
		(category) => category.id === product.categoryId,
	)!

	const handleClick = () => {
		isCustomerOrder
			? cartActions.toggleItem(product)
			: orderActions.toggleStock(product)
	}

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={handleClick}
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
			{isCustomerOrder && (
				<span className="text-sm font-bold">{rupiah(product.price)}</span>
			)}
		</div>
	)
}
