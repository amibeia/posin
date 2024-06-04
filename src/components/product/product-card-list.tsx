'use client'

import { PackageOpen } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import ProductCard from '@/components/product/product-card'
import { ScrollArea } from '@/components/ui/scroll-area'

import { applyProductFilter, cn } from '@/lib/utils'
import { useCategories } from '@/store/category'
import { useProducts } from '@/store/product'

interface ProductCardList
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function ProductCardList(props: ProductCardList) {
	const products = useProducts()
	const categories = useCategories()
	const searchParams = useSearchParams()

	const query = searchParams.get('query') || ''
	const selectedCategoryName = searchParams.get('category')
	const selectedCategory = categories.find(
		(category) => category.name === selectedCategoryName,
	)

	const filteredProducts = applyProductFilter({
		products,
		query,
		categoryId: selectedCategory ? selectedCategory.id : '',
	})

	return filteredProducts.length !== 0 ? (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{filteredProducts
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
	) : (
		<section className="flex flex-1 items-center justify-center">
			<PackageOpen className="size-12 shrink-0 text-muted-foreground" />
		</section>
	)
}
