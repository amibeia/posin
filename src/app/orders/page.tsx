import OrderCardList from '@/components/order/order-card-list'
import OrderFiltersDrawer from '@/components/order/order-filters-drawer'

export default function OrdersPage() {
	return (
		<main className="mx-auto flex h-dvh max-w-xl flex-col">
			<section className="flex items-center justify-end p-4 pb-0">
				<OrderFiltersDrawer />
			</section>
			<OrderCardList className="my-4 flex-1 px-4" />
		</main>
	)
}
