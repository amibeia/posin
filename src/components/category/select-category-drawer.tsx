'use client'

import { ChevronsUpDown, Circle } from 'lucide-react'
import { forwardRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import CategoryCommand from '@/components/category/category-command'
import DrawerFooter from '@/components/global/drawer-footer'
import { Button, ButtonProps } from '@/components/ui/button'
import {
	DrawerContent,
	DrawerHeader,
	DrawerNested,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'

import { cn, parseCategoryName } from '@/lib/utils'
import { useCategories } from '@/store/category'

const SelectCategoryDrawer = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, ...props }, ref) => {
		const [open, setOpen] = useState(false)
		const categories = useCategories()

		const formContext = useFormContext()

		const selectedCategoryName = formContext.getValues('categoryName')
		const selectedCategory = selectedCategoryName
			? categories.find(
					(category) =>
						category.name === parseCategoryName(selectedCategoryName),
				)
			: undefined

		return (
			<DrawerNested open={open} onOpenChange={setOpen} dismissible={false}>
				<DrawerTrigger asChild>
					<Button
						ref={ref}
						variant="outline"
						className={cn('gap-2', className)}
						{...props}
					>
						<Circle
							style={{
								fill: selectedCategory ? selectedCategory.color : undefined,
							}}
							className="size-4 shrink-0"
						/>
						<span className="text-sm">
							{selectedCategory ? selectedCategory.name : 'Select Category'}
						</span>
						<ChevronsUpDown className="size-4 shrink-0" />
					</Button>
				</DrawerTrigger>
				<DrawerContent className="mx-auto max-w-xl">
					<DrawerHeader>
						<DrawerTitle>Select Product Category</DrawerTitle>
					</DrawerHeader>
					<CategoryCommand
						categories={categories}
						onSelect={() => setOpen(false)}
						className="flex-1 p-3"
					/>
					<Separator />
					<DrawerFooter />
				</DrawerContent>
			</DrawerNested>
		)
	},
)
SelectCategoryDrawer.displayName = 'SelectCategoryDrawer'

export default SelectCategoryDrawer
