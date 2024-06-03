'use client'

import { ArrowDown, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

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

import { rupiah } from '@/lib/utils'
import { useCart, useCartActions } from '@/store/cart'
import { useOrderActions } from '@/store/order'

export default function CartDrawer() {
	const [open, setOpen] = useState(false)
	const cart = useCart()
	const cartActions = useCartActions()
	const orderActions = useOrderActions()

	const totalItems = cart.length
	const total = cart.reduce(
		(value, item) => item.product.price * item.quantity + value,
		0,
	)

	const handleCheckoutClick = () => {
		orderActions.addOrder({ cart })
		cartActions.reset()
		toast.info(
			'Your order has been placed successfully! Thank you for shopping with us.',
		)

		setOpen(false)
	}

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
						{totalItems !== 0 && (
							<span className="ml-2 text-base">({totalItems})</span>
						)}
					</DrawerTitle>
					<DrawerDescription>
						Check your cart for all selected products and the overall price.
						Ensure everything is correct before you proceed to checkout.
					</DrawerDescription>
				</DrawerHeader>
				<CartItemCardList cart={cart} className="my-4 flex-1 px-4" />
				<DrawerFooter className="gap-4 bg-accent">
					{totalItems !== 0 && (
						<div className="flex items-center justify-between">
							<span className="text-base">Total</span>
							<span className="text-base font-bold">{rupiah(total)}</span>
						</div>
					)}
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
						<Button
							size="lg"
							className="w-full rounded-full"
							disabled={cart.length === 0}
							onClick={handleCheckoutClick}
						>
							Checkout
						</Button>
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
