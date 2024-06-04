'use client'

import { ArrowDown } from 'lucide-react'
import { forwardRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import CategoryOption from '@/components/category/category-option'
import CategoryOptionList from '@/components/category/category-option-list'
import { Button, ButtonProps } from '@/components/ui/button'
import {
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerNested,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'

import { useCategories } from '@/store/category'

const SelectCategoryDrawer = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const [open, setOpen] = useState(false)
		const categories = useCategories()
		const formContext = useFormContext()

		const selectedCategoryName = formContext.getValues('categoryName')
		const selectedCategory = categories.find(
			(category) => category.name === selectedCategoryName,
		)

		return (
			<DrawerNested open={open} onOpenChange={setOpen} dismissible={false}>
				<DrawerTrigger asChild>
					<CategoryOption ref={ref} category={selectedCategory} {...props} />
				</DrawerTrigger>
				<DrawerContent className="mx-auto max-w-xl">
					<DrawerHeader>
						<DrawerTitle>Select Product Category</DrawerTitle>
					</DrawerHeader>
					<CategoryOptionList
						categories={categories}
						onSelect={() => setOpen(false)}
						className="my-4 flex-1 px-4"
					/>
					<Separator />
					<DrawerFooter className="flex-row">
						<DrawerClose asChild>
							<Button
								variant="outline"
								size="icon"
								className="size-10 shrink-0 rounded-full"
							>
								<ArrowDown className="size-4 shrink-0" />
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</DrawerNested>
		)
	},
)
SelectCategoryDrawer.displayName = 'SelectCategoryDrawer'

export default SelectCategoryDrawer
