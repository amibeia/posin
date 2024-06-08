'use client'

import { PackageOpen } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import ProductCard from '@/components/product/product-card'
import { ScrollArea } from '@/components/ui/scroll-area'

import { CATEGORY_PARAMS, QUERY_PARAMS } from '@/lib/constants'
import { CategoryName } from '@/lib/types'
import { applyProductFilters, cn, parseCategoryName } from '@/lib/utils'
import { useCategories } from '@/store/category'
import { useProducts } from '@/store/product'

interface ProductCardList
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function ProductCardList(props: ProductCardList) {
	const products = useProducts()
	const categories = useCategories()
	const searchParams = useSearchParams()

	const queryParams = searchParams.get(QUERY_PARAMS) || undefined
	const categoryParams = searchParams.get(CATEGORY_PARAMS) || undefined

	const selectedCategory = categoryParams
		? categories.find(
				(category) =>
					category.name === parseCategoryName(categoryParams as CategoryName),
			)
		: undefined

	const filteredProducts = applyProductFilters({
		products,
		query: queryParams,
		categoryId: selectedCategory ? selectedCategory.id : undefined,
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
							className={cn(
								filteredProducts.length - 1 === index && 'mb-[65px]',
							)}
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
