'use client'

import { PackageOpen } from 'lucide-react'

import StockCard from '@/components/order/stock-card'
import { ScrollArea } from '@/components/ui/scroll-area'

import { cn } from '@/lib/utils'
import { useStocks } from '@/store/order'

interface StockCardListProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function StockCardList(props: StockCardListProps) {
	const stocks = useStocks()

	return stocks.length !== 0 ? (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{stocks
					.sort((a, b) =>
						a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
					)
					.map((stock, index) => (
						<StockCard
							key={stock.id}
							stock={stock}
							className={cn(index === stocks.length - 1 && 'mb-[65px]')}
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
