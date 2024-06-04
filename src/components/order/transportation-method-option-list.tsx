import TransportationMethodOption from '@/components/order/transportation-method-option'

import { TRANSPORTATION_METHOD_OPTIONS } from '@/lib/constants'

export default function TransportationMethodOptionList() {
	return (
		<section className="grid grid-cols-4 gap-4">
			{TRANSPORTATION_METHOD_OPTIONS.map((option, index) => (
				<TransportationMethodOption
					id={index === 0 ? 'transportation-method-select' : undefined}
					key={option.id}
					option={option}
				/>
			))}
		</section>
	)
}
