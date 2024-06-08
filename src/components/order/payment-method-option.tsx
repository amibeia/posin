'use client'

import { Button } from '@/components/ui/button'

import { PaymentMethodOption as Option } from '@/lib/types'
import { useOrder, useOrderActions } from '@/store/order'

interface PaymentMethodOptionProps
	extends React.ComponentPropsWithoutRef<'div'> {
	option: Option
}

export default function PaymentMethodOption({
	option,
	...props
}: PaymentMethodOptionProps) {
	const order = useOrder()
	const orderActions = useOrderActions()

	const isOptionSelected = order.paymentMethod === option.id
	const Icon = option.icon

	return (
		<div className="flex flex-col items-center justify-center gap-1" {...props}>
			<Button
				variant={isOptionSelected ? 'default' : 'outline'}
				size="sm"
				onClick={() => orderActions.changePaymentMethod(option.id)}
				className="w-full"
			>
				<Icon className="size-4 shrink-0" />
			</Button>
			<span className="text-xs">{option.label}</span>
		</div>
	)
}
