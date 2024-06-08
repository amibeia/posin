import { Suspense } from 'react'

import OrderCardList from '@/components/order/order-card-list'
import OrderFiltersDrawer from '@/components/order/order-filters-drawer'
import OrderCardListSkeleton from '@/components/skeleton/order-card-list-skeleton'
import OrderFiltersDrawerSkeleton from '@/components/skeleton/order-filters-drawer-skeleton'

export default function OrdersPage() {
	return (
		<main className="mx-auto flex h-dvh max-w-xl flex-col">
			<section className="flex items-center justify-end p-4 pb-0">
				<Suspense fallback={<OrderFiltersDrawerSkeleton />}>
					<OrderFiltersDrawer />
				</Suspense>
			</section>
			<Suspense
				fallback={<OrderCardListSkeleton className="my-4 flex-1 px-4" />}
			>
				<OrderCardList className="my-4 flex-1 px-4" />
			</Suspense>
		</main>
	)
}
