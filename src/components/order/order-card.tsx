'use client'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import CategoryBadgeList from '@/components/category/category-badge-list'
import OrderIcons from '@/components/order/order-icons'
import OrderTable from '@/components/order/order-table'
import { Button } from '@/components/ui/button'

import { Order } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useOrderActions } from '@/store/order'

dayjs.extend(localizedFormat)

interface OrderCardProps extends React.ComponentPropsWithoutRef<'div'> {
	order: Order
}

export default function OrderCard({
	order,
	className,
	...props
}: OrderCardProps) {
	const orderActions = useOrderActions()

	return (
		<div
			className={cn(
				'flex flex-col gap-4 rounded-xl border border-input bg-background p-4 shadow-sm',
				className,
			)}
			{...props}
		>
			<section className="flex flex-col gap-2">
				<div className="flex flex-col gap-1">
					<div className="flex items-center justify-between">
						<span className="text-sm font-bold">{order.id}</span>
						<OrderIcons order={order} />
					</div>
					<span className="text-sm">
						{dayjs(order.createdAt).format('lll')}
					</span>
				</div>
				<CategoryBadgeList items={order.items} />
			</section>
			<OrderTable order={order} />
			{order.transportationMethod && !order.hasShipped && (
				<Button onClick={() => orderActions.shipOrder(order.id)}>Ship</Button>
			)}
		</div>
	)
}
