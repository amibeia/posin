'use client'

import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

import CartItemCardList from '@/components/cart/cart-item-card-list'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

import { useCart } from '@/store/cart'

export default function CartDrawer() {
	const [open, setOpen] = useState(false)
	const cart = useCart()

	return (
		<Drawer open={open} onOpenChange={setOpen} dismissible={false}>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="icon" className="hover:bg-accent/80">
					<ShoppingCart className="size-4 shrink-0" />
				</Button>
			</DrawerTrigger>
			<DrawerContent className="mx-auto h-[95dvh] max-w-xl">
				<DrawerHeader>
					<DrawerTitle>Your Shopping Cart</DrawerTitle>
					<DrawerDescription>
						Check your cart for all selected products and the overall price.
						Ensure everything is correct before you proceed to checkout.
					</DrawerDescription>
				</DrawerHeader>
				<CartItemCardList cart={cart} className="my-4 flex-1 px-4" />
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="outline">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
