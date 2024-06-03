'use client'

import { PackageOpen } from 'lucide-react'

import OrderCard from '@/components/order/order-card'
import { ScrollArea } from '@/components/ui/scroll-area'

import { cn } from '@/lib/utils'
import { useOrders } from '@/store/order'

interface OrderCardListProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function OrderCardList(props: OrderCardListProps) {
	const orders = useOrders()

	return orders.length !== 0 ? (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{orders.map((order, index) => (
					<OrderCard
						key={order.id}
						order={order}
						className={cn(orders.length - 1 === index && 'mb-[65px]')}
					/>
				))}
			</section>
		</ScrollArea>
	) : (
		<section className="flex flex-1 items-center justify-center">
			<PackageOpen className="size-12 shrink-0 text-muted-foreground" />
		</section>
	)
}
