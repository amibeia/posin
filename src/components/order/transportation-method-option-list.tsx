import TransportationMethodOption from '@/components/order/transportation-method-option'

import { TRANSPORTATION_METHOD_OPTIONS } from '@/lib/constants'

export default function TransportationMethodOptionList() {
	return (
		<section className="grid grid-cols-4 gap-2">
			{TRANSPORTATION_METHOD_OPTIONS.map((option, index) => (
				<TransportationMethodOption key={option.id} option={option} />
			))}
		</section>
	)
}
