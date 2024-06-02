'use client'

import { useState } from 'react'

import { Category } from '@/lib/types'
import { cn, getCategoryIcon, lightenColor } from '@/lib/utils'

interface CategoryCardProps extends React.ComponentPropsWithoutRef<'div'> {
	category: Category
}

export default function CategoryCard({
	category,
	className,
	...props
}: CategoryCardProps) {
	const [isHovered, setIsHovered] = useState(false)
	const Icon = getCategoryIcon(category.name)

	return (
		<div
			style={{
				backgroundColor: isHovered
					? lightenColor(category.color, 30)
					: lightenColor(category.color, 50),
			}}
			className={cn(
				'flex w-[200px] items-center justify-between gap-4 rounded-xl border border-input p-4 shadow-sm transition-colors hover:text-accent-foreground',
				className,
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...props}
		>
			<span className="text-sm">{category.name}</span>
			<div
				style={{
					backgroundColor: isHovered
						? category.color
						: lightenColor(category.color, 20),
				}}
				className="flex size-12 shrink-0 items-center justify-center rounded-full transition-colors"
			>
				<Icon className="size-5 shrink-0" />
			</div>
		</div>
	)
}
