import StockCardList from '@/components/stock/stock-card-list'

export default function StockMonitorPage() {
	return (
		<main className="mx-auto flex h-dvh max-w-xl flex-col">
			<StockCardList className="my-4 flex-1 px-4" />
		</main>
	)
}
