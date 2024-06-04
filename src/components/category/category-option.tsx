'use client'

import { Circle } from 'lucide-react'
import { forwardRef, useState } from 'react'

import { Button, ButtonProps } from '@/components/ui/button'

import { Category } from '@/lib/types'
import { cn, lightenColor } from '@/lib/utils'

interface CategoryButtonProps extends ButtonProps {
	category?: Category
}

const CategoryOption = forwardRef<HTMLButtonElement, CategoryButtonProps>(
	({ category, className, ...props }, ref) => {
		const [isHovered, setIsHovered] = useState(false)

		return (
			<Button
				ref={ref}
				style={
					category
						? {
								color: isHovered
									? 'hsl(var(--accent-foreground))'
									: 'hsl(var(--foreground))',
								backgroundColor: isHovered
									? lightenColor(category.color, 30)
									: lightenColor(category.color, 50),
							}
						: undefined
				}
				className={cn('gap-2', className)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				{...props}
			>
				<Circle
					style={
						category
							? {
									fill: isHovered
										? category.color
										: lightenColor(category.color, 20),
								}
							: undefined
					}
					className="size-4 shrink-0"
				/>
				<span className="text-sm">{category ? category.name : 'Category'}</span>
			</Button>
		)
	},
)
CategoryOption.displayName = 'CategoryOption'

export default CategoryOption
