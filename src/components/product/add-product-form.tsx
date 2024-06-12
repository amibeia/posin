'use client '

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import SelectCategoryDrawer from '@/components/category/select-category-drawer'
import { Button } from '@/components/ui/button'
import { DrawerClose } from '@/components/ui/drawer'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import { CATEGORIES } from '@/lib/constants'
import { parseCategoryName } from '@/lib/utils'
import { useCategories } from '@/store/category'
import { useProductActions } from '@/store/product'

const formSchema = z.object({
	name: z.string().min(3),
	price: z.coerce.number().min(100),
	categoryName: z.enum(CATEGORIES),
})

export default function AddProductForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			price: 0,
		},
	})

	const categories = useCategories()
	const productActions = useProductActions()

	const submit = ({
		name,
		price,
		categoryName,
	}: z.infer<typeof formSchema>) => {
		const selectedCategory = categories.find(
			(category) => category.name === parseCategoryName(categoryName),
		)!

		productActions.addProduct({ name, price, categoryId: selectedCategory.id })

		toast.info('Your new product has been placed successfully!')

		form.setFocus('name', { shouldSelect: true })
		form.reset()
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(submit)}
				className="flex flex-1 flex-col"
			>
				<section className="flex flex-1 flex-col gap-4 p-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="space-y-0">
								<FormLabel className="sr-only">Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="text"
										autoFocus
										autoComplete="off"
										placeholder="Product name"
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="flex flex-wrap items-center justify-between gap-4">
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem className="space-y-0">
									<FormLabel className="sr-only">Price</FormLabel>
									<div className="flex items-center gap-2">
										<span className="text-sm font-medium leading-none text-muted-foreground">
											Rp
										</span>
										<FormControl>
											<Input
												{...field}
												type="number"
												autoComplete="off"
												value={Number(field.value).toString()}
												className="w-[100px]"
											/>
										</FormControl>
									</div>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="categoryName"
							render={({ field }) => (
								<FormItem className="space-y-0">
									<FormLabel className="sr-only">Category</FormLabel>
									<FormControl>
										<SelectCategoryDrawer {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
				</section>
				<Separator />
				<section className="mt-auto flex items-center justify-between p-4">
					<DrawerClose asChild>
						<Button
							type="button"
							variant="outline"
							size="icon"
							className="size-10 shrink-0 rounded-full"
						>
							<ArrowDown className="size-4 shrink-0" />
						</Button>
					</DrawerClose>
					<Button
						type="submit"
						size="lg"
						disabled={!form.formState.isValid}
						className="rounded-full"
					>
						Add Product
					</Button>
				</section>
			</form>
		</Form>
	)
}
