'use client'

import { toast } from 'sonner'

import SelectCustomerAddressDrawer from '@/components/customer/select-customer-address-drawer'
import SelectCustomerDrawer from '@/components/customer/select-customer-drawer'
import DrawerFooter from '@/components/global/drawer-footer'
import PaymentMethodOptionList from '@/components/order/payment-method-option-list'
import TransportationMethodOptionList from '@/components/order/transportation-method-option-list'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

import { useCart, useCartActions } from '@/store/cart'
import { useCustomer, useCustomerActions } from '@/store/customer'
import { useOrder, useOrderActions } from '@/store/order'

interface CheckoutFormProps {
	onSubmit: () => void
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
	const cart = useCart()
	const order = useOrder()
	const customer = useCustomer()
	const cartActions = useCartActions()
	const orderActions = useOrderActions()
	const customerActions = useCustomerActions()

	const handleCreateOrderClick = () => {
		orderActions.addOrder({ items: cart, customer })
		orderActions.reset()
		cartActions.reset()
		customerActions.reset()

		toast.info(
			'Your order has been placed successfully! Thank you for shopping with us.',
		)

		onSubmit()
	}

	return (
		<section className="flex flex-1 flex-col justify-between">
			<div className="flex flex-1 flex-col gap-4 px-4 pt-2">
				<div className="flex flex-col gap-2">
					<Label>Customer</Label>
					<SelectCustomerDrawer />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Address</Label>
					<SelectCustomerAddressDrawer disabled={!customer} />
				</div>
				<div className="flex flex-col gap-1">
					<div className="flex items-center justify-between">
						<Label>Ship this order</Label>
						<Switch
							disabled={!customer}
							checked={order.isNeedShipped}
							onCheckedChange={() => orderActions.toggleNeedShipped()}
						/>
					</div>
					<span className="pr-[40px] text-xs text-muted-foreground">
						If you want this order to be shipped, enable this option.
					</span>
				</div>
				{order.isNeedShipped && (
					<div className="flex flex-col gap-2">
						<Label>Transportation method</Label>
						<TransportationMethodOptionList />
					</div>
				)}
			</div>
			<div className="flex flex-col gap-2 px-4 pb-2">
				<Label>Payment method</Label>
				<PaymentMethodOptionList />
			</div>
			<Separator />
			<DrawerFooter>
				<Button
					size="lg"
					className="rounded-full"
					disabled={
						cart.length === 0 ||
						(!!customer && !!customer.address && !order.isNeedShipped) ||
						(!!customer && !customer.address && order.isNeedShipped)
					}
					onClick={handleCreateOrderClick}
				>
					Create Order
				</Button>
			</DrawerFooter>
		</section>
	)
}
