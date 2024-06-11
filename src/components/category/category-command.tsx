'use client'

import { Circle } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
} from '@/components/ui/command'

import { Category, CategoryName } from '@/lib/types'
import { cn, formatCategoryName } from '@/lib/utils'

interface CategoryCommandProps
	extends React.ComponentPropsWithoutRef<typeof Command> {
	categories: Category[]
	onSelect: () => void
}

export default function CategoryCommand({
	categories,
	onSelect,
	...props
}: CategoryCommandProps) {
	const formContext = useFormContext()

	const selectedCategoryName = formContext.getValues(
		'categoryName',
	) as CategoryName

	return (
		<Command {...props}>
			<CommandList>
				<CommandGroup className="flex flex-col gap-2">
					{categories.map((category, index) => {
						const categoryName = formatCategoryName(category.name)
						const isSelectedCategory = selectedCategoryName === categoryName

						const handleSelect = () => {
							formContext.setValue(
								'categoryName',
								isSelectedCategory ? undefined : categoryName,
								{
									shouldValidate: true,
								},
							)

							onSelect()
						}

						return (
							<CommandItem
								key={category.id}
								value={category.name}
								onSelect={handleSelect}
								className={cn(
									'cursor-pointer gap-2 rounded-none border border-input bg-background shadow-sm',
									index === 0 && 'rounded-b-none rounded-t-md',
									index === categories.length - 1
										? 'rounded-b-md rounded-t-none border-b'
										: 'border-b-0',
								)}
							>
								<Circle
									style={{
										fill: isSelectedCategory ? category.color : undefined,
									}}
									className="size-4 shrink-0"
								/>
								<span className="text-sm">{category.name}</span>
							</CommandItem>
						)
					})}
				</CommandGroup>
			</CommandList>
		</Command>
	)
}
