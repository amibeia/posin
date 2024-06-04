'use client'

import { useFormContext } from 'react-hook-form'

import CategoryOption from '@/components/category/category-option'

import { Category } from '@/lib/types'
import { cn } from '@/lib/utils'

interface CategoryOptionListProps
	extends React.ComponentPropsWithoutRef<'section'> {
	categories: Category[]
	onSelect: () => void
}

export default function CategoryOptionList({
	categories,
	onSelect,
	className,
	...props
}: CategoryOptionListProps) {
	const formContext = useFormContext()

	return (
		<section className={cn('flex flex-col gap-2', className)} {...props}>
			{categories.map((category) => {
				const handleClick = () => {
					formContext.setValue('categoryName', category.name, {
						shouldValidate: true,
					})

					onSelect()
				}

				return (
					<CategoryOption
						key={category.id}
						category={category}
						onClick={handleClick}
						className="justify-start"
					/>
				)
			})}
		</section>
	)
}
