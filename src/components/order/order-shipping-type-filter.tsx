'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

import {
	ORDER_SHIPPING_TYPE_OPTIONS,
	ORDER_SHIPPING_TYPE_PARAMS,
	TRANSPORTATION_METHOD_PARAMS,
} from '@/lib/constants'
import { OrderShippingType } from '@/lib/types'

export default function OrderShippingTypeFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const params = searchParams.get(ORDER_SHIPPING_TYPE_PARAMS) || undefined

	return (
		<section className="flex items-center gap-2">
			{ORDER_SHIPPING_TYPE_OPTIONS.map((option) => {
				const isSelectedOption = params === option.id
				const Icon = option.icon

				const handleClick = () => {
					const urlSearchParams = new URLSearchParams(searchParams)

					isSelectedOption
						? urlSearchParams.delete(ORDER_SHIPPING_TYPE_PARAMS)
						: urlSearchParams.set(ORDER_SHIPPING_TYPE_PARAMS, option.id)

					if ((params as OrderShippingType) === 'ship') {
						urlSearchParams.delete(TRANSPORTATION_METHOD_PARAMS)
					}

					router.replace(`${pathname}?${urlSearchParams.toString()}`)
				}

				return (
					<Button
						key={option.id}
						variant={isSelectedOption ? 'default' : 'outline'}
						size="icon"
						onClick={handleClick}
						className="shrink-0"
					>
						<Icon className="size-4 shrink-0" />
					</Button>
				)
			})}
		</section>
	)
}
