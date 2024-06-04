'use client'

import { ArrowDown, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'

import CartItemCardList from '@/components/cart/cart-item-card-list'
import CheckoutDrawer from '@/components/order/checkout-drawer'
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
import { Separator } from '@/components/ui/separator'

import { getOrderTotal, rupiah } from '@/lib/utils'
import { useCart } from '@/store/cart'

export default function CartDrawer() {
	const [open, setOpen] = useState(false)
	const cart = useCart()

	const totalItems = cart.length
	const total = getOrderTotal(cart)

	useEffect(() => {
		if (totalItems === 0) {
			setOpen(false)
		}
	}, [totalItems])

	return (
		<Drawer open={open} onOpenChange={setOpen} dismissible={false}>
			<DrawerTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="group/cart-navigation relative shrink-0 hover:bg-accent/80"
				>
					<ShoppingCart className="size-4 shrink-0" />
					{totalItems !== 0 && (
						<span className="absolute right-0.5 top-0.5 z-20 flex size-4 shrink-0 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground group-hover/cart-navigation:bg-destructive/90">
							{totalItems}
						</span>
					)}
				</Button>
			</DrawerTrigger>
			<DrawerContent className="mx-auto h-[95dvh] max-w-xl">
				<DrawerHeader>
					<DrawerTitle>
						<span>Your Shopping Cart</span>
						<span className="ml-2 text-base">({totalItems})</span>
					</DrawerTitle>
					<DrawerDescription>
						Check your cart for all selected products and the overall price.
						Ensure everything is correct before you proceed to checkout.
					</DrawerDescription>
				</DrawerHeader>
				<CartItemCardList cart={cart} className="my-4 flex-1 px-4" />
				<Separator />
				<DrawerFooter className="gap-4">
					<div className="flex items-center justify-between">
						<span className="text-base">Total</span>
						<span className="text-base font-bold">{rupiah(total)}</span>
					</div>
					<div className="flex items-center gap-2">
						<DrawerClose asChild>
							<Button
								variant="outline"
								size="icon"
								className="size-10 shrink-0 rounded-full"
							>
								<ArrowDown className="size-4 shrink-0" />
							</Button>
						</DrawerClose>
						<CheckoutDrawer />
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
