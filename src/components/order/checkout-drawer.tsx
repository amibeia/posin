'use client'

import { ArrowDown } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import PaymentMethodOptionList from '@/components/order/payment-method-option-list'
import { Button } from '@/components/ui/button'
import {
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerNested,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

import { useCart, useCartActions } from '@/store/cart'
import { useOrder, useOrderActions } from '@/store/order'

export default function CheckoutDrawer() {
	const [open, setOpen] = useState(false)
	const order = useOrder()
	const cart = useCart()
	const cartActions = useCartActions()
	const orderActions = useOrderActions()

	const totalItems = cart.length

	const handleCreateOrderClick = () => {
		orderActions.addOrder({ items: cart, paymentMethod: order.paymentMethod })
		orderActions.reset()
		cartActions.reset()
		toast.info(
			'Your order has been placed successfully! Thank you for shopping with us.',
		)

		setOpen(false)
	}

	return (
		<DrawerNested open={open} onOpenChange={setOpen} dismissible={false}>
			<DrawerTrigger asChild>
				<Button
					size="lg"
					className="w-full rounded-full"
					disabled={cart.length === 0}
				>
					Checkout
				</Button>
			</DrawerTrigger>
			<DrawerContent className="mx-auto h-[93dvh] max-w-xl">
				<DrawerHeader>
					<DrawerTitle>
						<span>Checkout Details</span>
						<span className="ml-2 text-base">({totalItems})</span>
					</DrawerTitle>
					<DrawerDescription>
						Review and confirm your order details below to ensure everything is
						correct. Proceed when everything looks good.
					</DrawerDescription>
				</DrawerHeader>
				<section className="flex flex-col gap-1 p-4">
					<p className="text-sm">Payment Method</p>
					<PaymentMethodOptionList />
				</section>
				<DrawerFooter className="flex-row bg-accent">
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
						onClick={handleCreateOrderClick}
					>
						Create Order
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</DrawerNested>
	)
}
