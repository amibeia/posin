'use client'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import CategoryBadgeList from '@/components/category/category-badge-list'
import OrderTable from '@/components/order/order-table'

import { PAYMENT_METHOD_OPTIONS } from '@/lib/constants'
import { Order } from '@/lib/types'
import { cn } from '@/lib/utils'

dayjs.extend(localizedFormat)

interface OrderCardProps extends React.ComponentPropsWithoutRef<'div'> {
	order: Order
}

export default function OrderCard({
	order,
	className,
	...props
}: OrderCardProps) {
	const PaymentMethodIcon = PAYMENT_METHOD_OPTIONS.find(
		(option) => option.id === order.paymentMethod,
	)!.icon

	return (
		<div
			className={cn(
				'flex flex-col gap-2 rounded-xl border border-input bg-background p-4 shadow-sm',
				className,
			)}
			{...props}
		>
			<section className="flex flex-col gap-1">
				<div className="flex items-center justify-between">
					<span className="text-sm font-bold">{order.id}</span>
					<PaymentMethodIcon className="size-4 shrink-0" />
				</div>
				<span className="text-sm">{dayjs(order.createdAt).format('lll')}</span>
			</section>
			<CategoryBadgeList items={order.items} />
			<OrderTable order={order} />
		</div>
	)
}
