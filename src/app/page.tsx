import CategoryCardList from '@/components/category/category-card-list'
import MobileNav from '@/components/global/mobile-nav'

import ProductCardList from '@/components/product/product-card-list'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
	return (
		<main className="mx-auto flex h-dvh max-w-xl flex-col">
			<CategoryCardList className="ml-4 py-4" />
			<div className="p-4">
				<Separator />
			</div>
			<ProductCardList className="my-4 flex-1 px-4" />
			<MobileNav className="fixed inset-x-0 bottom-4" />
		</main>
	)
}
