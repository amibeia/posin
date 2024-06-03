import OrderCardList from '@/components/order/order-card-list'

export default function OrdersPage() {
	return (
		<main className="mx-auto flex h-dvh max-w-xl flex-col">
			<OrderCardList className="my-4 flex-1 px-4" />
		</main>
	)
}
