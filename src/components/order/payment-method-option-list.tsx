'use client'

import Option from '@/components/global/option'

import { PAYMENT_METHOD_OPTIONS } from '@/lib/constants'
import { useOrder, useOrderActions } from '@/store/order'

export default function PaymentMethodOptionList() {
	const order = useOrder()
	const orderActions = useOrderActions()

	return (
		<section className="grid grid-cols-3 gap-2">
			{PAYMENT_METHOD_OPTIONS.map((option) => {
				const isOptionSelected = order.paymentMethod === option.id

				return (
					<Option
						key={option.id}
						option={option}
						variant={isOptionSelected ? 'default' : 'outline'}
						onClick={() => orderActions.changePaymentMethod(option.id)}
					/>
				)
			})}
		</section>
	)
}
