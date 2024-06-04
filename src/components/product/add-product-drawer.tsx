'use client'

import { CirclePlus } from 'lucide-react'
import { useState } from 'react'

import AddProductForm from '@/components/product/add-product-form'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

export default function AddProductDrawer() {
	const [open, setOpen] = useState(false)

	return (
		<Drawer open={open} onOpenChange={setOpen} dismissible={false}>
			<DrawerTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="shrink-0 hover:bg-accent/80"
				>
					<CirclePlus className="size-4 shrink-0" />
				</Button>
			</DrawerTrigger>
			<DrawerContent className="mx-auto max-w-xl">
				<DrawerHeader>
					<DrawerTitle>Add New Product</DrawerTitle>
					<DrawerDescription>
						Fill in the details below to create a new product. Ensure all
						required fields are completed accurately before submitting.
					</DrawerDescription>
				</DrawerHeader>
				<AddProductForm />
			</DrawerContent>
		</Drawer>
	)
}
