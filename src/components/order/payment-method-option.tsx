'use client'

import { Button } from '@/components/ui/button'

import { PaymentMethodOption as Option } from '@/lib/types'
import { useOrder, useOrderActions } from '@/store/order'

interface PaymentMethodOptionProps {
	option: Option
}

export default function PaymentMethodOption({
	option,
}: PaymentMethodOptionProps) {
	const order = useOrder()
	const orderActions = useOrderActions()

	const isOptionSelected = order.paymentMethod === option.id
	const Icon = option.icon

	return (
		<div className="flex flex-col items-center justify-center gap-1">
			<Button
				variant={isOptionSelected ? 'default' : 'outline'}
				className="h-10 w-full"
				onClick={() => orderActions.changePaymentMethod(option.id)}
			>
				<Icon className="size-6 shrink-0" />
			</Button>
			<span className="text-xs">{option.label}</span>
		</div>
	)
}
