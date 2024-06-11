'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

import {
	ORDER_SHIPPING_TYPE_PARAMS,
	TRANSPORTATION_METHOD_OPTIONS,
	TRANSPORTATION_METHOD_PARAMS,
} from '@/lib/constants'

export default function TransportationMethodFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const params = searchParams.get(TRANSPORTATION_METHOD_PARAMS) || undefined

	return (
		<section className="flex flex-wrap items-center justify-end gap-2">
			{TRANSPORTATION_METHOD_OPTIONS.map((option) => {
				const isSelectedOption = params === option.id
				const Icon = option.icon

				const handleClick = () => {
					const urlSearchParams = new URLSearchParams(searchParams)

					if (isSelectedOption) {
						urlSearchParams.delete(TRANSPORTATION_METHOD_PARAMS)
					} else {
						urlSearchParams.set(TRANSPORTATION_METHOD_PARAMS, option.id)
						urlSearchParams.set(ORDER_SHIPPING_TYPE_PARAMS, 'ship')
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
