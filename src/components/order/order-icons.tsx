import { CircleCheck, CircleX, ShoppingBag } from 'lucide-react'

import {
	PAYMENT_METHOD_OPTIONS,
	TRANSPORTATION_METHOD_OPTIONS,
} from '@/lib/constants'
import { Order } from '@/lib/types'

interface OrderIconsProps {
	order: Order
}

export default function OrderIcons({ order }: OrderIconsProps) {
	const PaymentMethodIcon = PAYMENT_METHOD_OPTIONS.find(
		(option) => option.id === order.paymentMethod,
	)!.icon

	const ShipIcon = order.transportationMethod
		? TRANSPORTATION_METHOD_OPTIONS.find(
				(option) => option.id === order.transportationMethod,
			)!.icon
		: ShoppingBag

	const CompletedIcon = order.hasShipped ? CircleCheck : CircleX

	const iconStyle = { className: 'size-4 shrink-0' }

	return (
		<section className="flex items-center gap-2">
			<PaymentMethodIcon {...iconStyle} />
			<ShipIcon {...iconStyle} />
			<CompletedIcon {...iconStyle} />
		</section>
	)
}
