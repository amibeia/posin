import Option from '@/components/global/option'

import {
	OrderStatusOption,
	PaymentMethodOption,
	TransportationMethodOption,
} from '@/lib/types'

interface OptionListProps {
	objects:
		| PaymentMethodOption[]
		| TransportationMethodOption[]
		| OrderStatusOption[]
	paramsName: string
}

export default function OptionList({ objects, paramsName }: OptionListProps) {
	return (
		<div className="flex items-center gap-2">
			{objects.map((object) => (
				<Option
					key={object.id}
					value={object.id}
					paramsName={paramsName}
					Icon={object.icon}
				/>
			))}
		</div>
	)
}
