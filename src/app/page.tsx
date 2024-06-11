import { Suspense, lazy } from 'react'

import CategoryCardListSkeleton from '@/components/skeleton/category-card-list-skeleton'
import OrderTypeSwitchSkeleton from '@/components/skeleton/order-type-switch-skeleton'
import ProductCardListSkeleton from '@/components/skeleton/product-card-list-skeleton'
import ProductSearchSkeleton from '@/components/skeleton/product-search-skeleton'
import { Separator } from '@/components/ui/separator'

import { delay } from '@/lib/utils'

const ProductSearch = lazy(async () => {
	const [moduleExports] = await Promise.all([
		import('@/components/product/product-search'),
		delay(),
	])

	return moduleExports
})

const OrderTypeSwitch = lazy(async () => {
	const [moduleExports] = await Promise.all([
		import('@/components/order/order-type-switch'),
		delay(),
	])

	return moduleExports
})

const CategoryCardList = lazy(async () => {
	const [moduleExports] = await Promise.all([
		import('@/components/category/category-card-list'),
		delay(),
	])

	return moduleExports
})

const ProductCardList = lazy(async () => {
	const [moduleExports] = await Promise.all([
		import('@/components/product/product-card-list'),
		delay(),
	])

	return moduleExports
})

export default function HomePage() {
	return (
		<main className="mx-auto flex h-dvh max-w-xl flex-col">
			<section className="flex items-center justify-between gap-2 p-4 pb-0">
				<Suspense fallback={<ProductSearchSkeleton />}>
					<ProductSearch />
				</Suspense>
				<Suspense fallback={<OrderTypeSwitchSkeleton />}>
					<OrderTypeSwitch />
				</Suspense>
			</section>
			<Suspense fallback={<CategoryCardListSkeleton className="py-4" />}>
				<CategoryCardList className="py-4" />
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
