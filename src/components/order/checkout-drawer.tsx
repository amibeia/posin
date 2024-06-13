'use client'

import { useState } from 'react'

import CheckoutForm from '@/components/order/checkout-form'
import { Button } from '@/components/ui/button'
import {
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerNested,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

import { useCart } from '@/store/cart'

export default function CheckoutDrawer() {
	const [open, setOpen] = useState(false)
	const cart = useCart()

	const totalItems = cart.length

	return (
		<DrawerNested open={open} onOpenChange={setOpen} dismissible={false}>
			<DrawerTrigger asChild>
				<Button size="lg" className="rounded-full" disabled={cart.length === 0}>
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
				<CheckoutForm onSubmit={() => setOpen(false)} />
			</DrawerContent>
		</DrawerNested>
	)
}
