import { Suspense } from 'react'

import CategoryCardList from '@/components/category/category-card-list'
import ProductCardList from '@/components/product/product-card-list'
import ProductSearch from '@/components/product/product-search'
import CategoryCardListSkeleton from '@/components/skeleton/category-card-list-skeleton'
import ProductCardListSkeleton from '@/components/skeleton/product-card-list-skeleton'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
	return (
		<main className="mx-auto flex h-dvh max-w-xl flex-col">
			<section className="p-4 pb-0">
				<ProductSearch />
			</section>
			<Suspense fallback={<CategoryCardListSkeleton className="ml-4 py-4" />}>
				<CategoryCardList className="ml-4 py-4" />
			</Suspense>
			<div className="my-1 px-4">
				<Separator />
			</div>
			<Suspense
				fallback={<ProductCardListSkeleton className="my-4 flex-1 px-4" />}
			>
				<ProductCardList className="my-4 flex-1 px-4" />
			</Suspense>
		</main>
	)
}
