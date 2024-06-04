import { BaggageClaim, Briefcase, CircleCheck, CircleX } from 'lucide-react'

import { PAYMENT_METHOD_OPTIONS } from '@/lib/constants'
import { Order } from '@/lib/types'

interface OrderIconsProps {
	order: Order
}

export default function OrderIcons({ order }: OrderIconsProps) {
	const PaymentMethodIcon = PAYMENT_METHOD_OPTIONS.find(
		(option) => option.id === order.paymentMethod,
	)!.icon

	const iconStyle = { className: 'size-4 shrink-0' }

	return (
		<section className="flex items-center gap-2">
			<PaymentMethodIcon {...iconStyle} />

			{order.isNeedShipped ? (
				<BaggageClaim {...iconStyle} />
			) : (
				<Briefcase {...iconStyle} />
			)}

			{order.isNeedShipped && !order.hasShipped ? (
				<CircleX {...iconStyle} />
			) : (
				<CircleCheck {...iconStyle} />
			)}
		</section>
	)
}
