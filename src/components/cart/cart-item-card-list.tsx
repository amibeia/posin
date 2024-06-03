import { PackageOpen } from 'lucide-react'

import CartItemCard from '@/components/cart/cart-item-card'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Cart } from '@/lib/types'

interface CartItemCardListProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {
	cart: Cart
}

export default function CartItemCardList({
	cart,
	...props
}: CartItemCardListProps) {
	return cart.length !== 0 ? (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{cart.map((item) => (
					<CartItemCard key={item.product.id} item={item} />
				))}
			</section>
		</ScrollArea>
	) : (
		<section className="flex flex-1 items-center justify-center">
			<PackageOpen className="size-12 shrink-0 text-muted-foreground" />
		</section>
	)
}
