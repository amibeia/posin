'use client'

import { ArrowDown } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import PaymentMethodOptionList from '@/components/order/payment-method-option-list'
import TransportationMethodOptionList from '@/components/order/transportation-method-option-list'
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
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

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
		orderActions.addOrder({ items: cart })
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
				<section className="flex flex-1 flex-col justify-between p-4">
					<div className="flex flex-1 flex-col gap-4">
						<section className="flex flex-col gap-1">
							<div className="flex items-center justify-between">
								<Label htmlFor="order-switch">Ship this order</Label>
								<Switch
									id="order-switch"
									checked={order.isNeedShipped}
									onCheckedChange={() => orderActions.toggleNeedShipped()}
								/>
							</div>
							<span className="pr-[40px] text-xs text-muted-foreground">
								If you want this order to be shipped, enable this option.
							</span>
						</section>
						{order.isNeedShipped && (
							<section className="flex flex-col gap-2">
								<Label htmlFor="transportation-method-select">
									Transportation method
								</Label>
								<TransportationMethodOptionList />
							</section>
						)}
					</div>
					<section className="flex flex-col gap-2">
						<Label htmlFor="payment-method-select">Payment method</Label>
						<PaymentMethodOptionList />
					</section>
				</section>
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