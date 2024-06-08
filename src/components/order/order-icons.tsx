import {
	BAG_TYPE_ICON_MAP,
	ORDER_STATUS_ICON_MAP,
	PAYMENT_METHOD_ICON_MAP,
	TRANSPORTATION_METHOD_ICON_MAP,
} from '@/lib/constants'
import { Order } from '@/lib/types'

interface OrderIconsProps {
	order: Order
}

export default function OrderIcons({ order }: OrderIconsProps) {
	const PaymentMethodIcon = PAYMENT_METHOD_ICON_MAP.get(order.paymentMethod)!
	const ShippingIcon = order.transportationMethod
		? TRANSPORTATION_METHOD_ICON_MAP.get(order.transportationMethod)!
		: BAG_TYPE_ICON_MAP.get('shopping-bag')!
	const CompletedIcon = ORDER_STATUS_ICON_MAP.get(
		order.hasShipped ? 'completed' : 'uncompleted',
	)!

	const icons = [PaymentMethodIcon, ShippingIcon, CompletedIcon]

	return (
		<section className="flex items-center gap-2">
			{icons.map((Icon, index) => (
				<Icon key={Icon.displayName! + index} className="size-4 shrink-0" />
			))}
		</section>
	)
}
