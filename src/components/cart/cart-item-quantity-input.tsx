'use client'

import { Minus, Plus, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { CartItem } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useCartActions } from '@/store/cart'

interface CartItemQuantityInputProps
	extends React.ComponentPropsWithoutRef<'div'> {
	item: CartItem
}

export default function CartItemQuantityInput({
	item,
	className,
	...props
}: CartItemQuantityInputProps) {
	const cartActions = useCartActions()

	return (
		<div
			className={cn(
				'flex w-fit items-center gap-2 rounded-xl border border-input bg-background p-2',
				className,
			)}
			{...props}
		>
			<Button
				variant="ghost"
				size="icon"
				className="size-6"
				onClick={() => cartActions.deleteItem(item.product.id)}
			>
				<Trash className="size-4 shrink-0" />
			</Button>
			<Separator orientation="vertical" className="mx-1 h-6" />
			<Button
				variant="ghost"
				size="icon"
				className="size-6"
				disabled={item.quantity <= 1}
				onClick={() => cartActions.decreaseItemQuantity(item.product.id)}
			>
				<Minus className="size-4 shrink-0" />
			</Button>
			<span className="w-[30px] text-center text-sm text-muted-foreground">
				{item.quantity}
			</span>
			<Button
				variant="ghost"
				size="icon"
				className="size-6"
				onClick={() => cartActions.increaseItemQuantity(item.product.id)}
			>
				<Plus className="size-4 shrink-0" />
			</Button>
		</div>
	)
}
