'use client'

import { Minus, Plus, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
				'flex w-fit items-center gap-2 rounded-xl border border-input bg-background p-4',
				className,
			)}
			{...props}
		>
			<Button
				variant="ghost"
				size="icon"
				className="size-5 shrink-0"
				onClick={() => cartActions.deleteItem(item.product.id)}
			>
				<Trash className="size-4 shrink-0" />
			</Button>
			<Separator orientation="vertical" className="mx-1 h-6" />
			<Button
				variant="ghost"
				size="icon"
				disabled={item.quantity <= 1}
				onClick={() => cartActions.decreaseItemQuantity(item.product.id)}
				className="size-5 shrink-0"
			>
				<Minus className="size-4 shrink-0" />
			</Button>
			<Input
				type="number"
				autoComplete="off"
				value={Number(item.quantity).toString()}
				onChange={(event) =>
					cartActions.changeItemQuantity(
						item.product.id,
						Number(event.target.value),
					)
				}
				className="h-6 w-[50px] p-0 text-center text-sm"
			/>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => cartActions.increaseItemQuantity(item.product.id)}
				className="size-5 shrink-0"
			>
				<Plus className="size-4 shrink-0" />
			</Button>
		</div>
	)
}
