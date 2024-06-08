import PaymentMethodOption from '@/components/order/payment-method-option'

import { PAYMENT_METHOD_OPTIONS } from '@/lib/constants'

export default function PaymentMethodOptionList() {
	return (
		<section className="grid grid-cols-3 gap-2">
			{PAYMENT_METHOD_OPTIONS.map((option, index) => (
				<PaymentMethodOption key={option.id} option={option} />
			))}
		</section>
	)
}
