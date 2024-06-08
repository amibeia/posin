'use client'

import OptionList from '@/components/global/option-list'
import { Label } from '@/components/ui/label'

import {
	ORDER_STATUS_OPTIONS,
	ORDER_STATUS_PARAMS,
	PAYMENT_METHOD_OPTIONS,
	PAYMENT_METHOD_PARAMS,
	TRANSPORTATION_METHOD_OPTIONS,
	TRANSPORTATION_METHOD_PARAMS,
} from '@/lib/constants'

export default function OrderFilters() {
	return (
		<section className="flex flex-1 flex-col gap-4 p-4">
			<section className="flex items-center justify-between">
				<Label>Order Status</Label>
				<OptionList
					objects={ORDER_STATUS_OPTIONS}
					paramsName={ORDER_STATUS_PARAMS}
				/>
			</section>
			<section className="flex items-center justify-between">
				<Label>Payment Method</Label>
				<OptionList
					objects={PAYMENT_METHOD_OPTIONS}
					paramsName={PAYMENT_METHOD_PARAMS}
				/>
			</section>
			<section className="flex flex-col gap-1">
				<div className="flex items-center justify-between">
					<Label>Transportation Method</Label>
					<OptionList
						objects={TRANSPORTATION_METHOD_OPTIONS}
						paramsName={TRANSPORTATION_METHOD_PARAMS}
					/>
				</div>
				<span className="w-[270px] text-xs text-muted-foreground">
					If no transportation method is selected, the customer will pick up the
					items from the store.
				</span>
			</section>
		</section>
	)
}
