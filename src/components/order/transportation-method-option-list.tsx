'use client'

import Option from '@/components/global/option'

import { TRANSPORTATION_METHOD_OPTIONS } from '@/lib/constants'
import { useOrder, useOrderActions } from '@/store/order'

export default function TransportationMethodOptionList() {
	const order = useOrder()
	const orderActions = useOrderActions()

	return (
		<section className="grid grid-cols-4 gap-2">
			{TRANSPORTATION_METHOD_OPTIONS.map((option) => {
				const isOptionSelected = order.transportationMethod === option.id

				return (
					<Option
						key={option.id}
						option={option}
						variant={isOptionSelected ? 'default' : 'outline'}
						onClick={() => orderActions.changeTransportationMethod(option.id)}
					/>
				)
			})}
		</section>
	)
}
