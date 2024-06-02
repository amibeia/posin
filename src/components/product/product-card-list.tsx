'use client'

import ProductCard from '@/components/product/product-card'
import { ScrollArea } from '@/components/ui/scroll-area'

import { cn } from '@/lib/utils'
import { useProducts } from '@/store/product'

interface ProductCardList
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function ProductCardList(props: ProductCardList) {
	const products = useProducts()

	return (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{products
					.sort((a, b) =>
						a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
					)
					.map((product, index) => (
						<ProductCard
							key={product.id}
							product={product}
							className={cn(products.length - 1 === index && 'mb-[65px]')}
						/>
					))}
			</section>
		</ScrollArea>
	)
}
