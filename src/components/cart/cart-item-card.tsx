import CartItemQuantityInput from '@/components/cart/cart-item-quantity-input'

import { CartItem } from '@/lib/types'
import { rupiah } from '@/lib/utils'

interface CartItemCardProps {
	item: CartItem
}

export default function CartItemCard({ item }: CartItemCardProps) {
	return (
		<div className="group/cart-item-card relative flex flex-col gap-2 rounded-xl border border-input bg-background p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
			<div className="flex items-center justify-between gap-4">
				<span className="text-sm">{item.product.name}</span>
				<div className="flex items-center justify-center gap-2">
					<span className="text-sm text-muted-foreground">
						{item.quantity}x
					</span>
					<span className="text-sm font-bold">
						{rupiah(item.product.price)}
					</span>
				</div>
			</div>
			<CartItemQuantityInput
				item={item}
				className="invisible absolute inset-y-0 right-0 z-10 hidden border-0 border-l opacity-0 transition-opacity group-hover/cart-item-card:visible group-hover/cart-item-card:flex group-hover/cart-item-card:opacity-100"
			/>
		</div>
	)
}
