'use client'

import { PackageOpen } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import OrderCard from '@/components/order/order-card'
import { ScrollArea } from '@/components/ui/scroll-area'

import {
	CATEGORIES_PARAMS,
	ORDER_SHIPPING_TYPE_PARAMS,
	ORDER_STATUS_PARAMS,
	PAYMENT_METHOD_PARAMS,
	TRANSPORTATION_METHOD_PARAMS,
} from '@/lib/constants'
import {
	OrderShippingType,
	OrderStatus,
	PaymentMethod,
	TransportationMethod,
} from '@/lib/types'
import { applyOrderFilters, cn } from '@/lib/utils'
import { useCategories } from '@/store/category'
import { useOrders } from '@/store/order'

interface OrderCardListProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function OrderCardList(props: OrderCardListProps) {
	const orders = useOrders()
	const categories = useCategories()
	const searchParams = useSearchParams()

	const orderStatusParams = searchParams.get(ORDER_STATUS_PARAMS) || undefined
	const paymentMethodParams =
		searchParams.get(PAYMENT_METHOD_PARAMS) || undefined
	const orderShippingTypeParams =
		searchParams.get(ORDER_SHIPPING_TYPE_PARAMS) || undefined
	const transportationMethodParams =
		searchParams.get(TRANSPORTATION_METHOD_PARAMS) || undefined
	const categoriesParams = searchParams.get(CATEGORIES_PARAMS) || undefined

	const filteredOrders = applyOrderFilters({
		orders,
		categories,
		filters: {
			orderStatus: orderStatusParams as OrderStatus,
			paymentMethod: paymentMethodParams as PaymentMethod,
			orderShippingType: orderShippingTypeParams as OrderShippingType,
			transportationMethod: transportationMethodParams as TransportationMethod,
			categories: categoriesParams,
		},
	})

	return filteredOrders.length !== 0 ? (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{filteredOrders.map((order, index) => (
					<OrderCard
						key={order.id}
						order={order}
						className={cn(filteredOrders.length - 1 === index && 'mb-[65px]')}
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
