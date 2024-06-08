'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { ORDER_STATUS_OPTIONS, ORDER_STATUS_PARAMS } from '@/lib/constants'

export default function OrderStatusFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const params = searchParams.get(ORDER_STATUS_PARAMS) || undefined

	return (
		<section className="flex items-center gap-2">
			{ORDER_STATUS_OPTIONS.map((option) => {
				const isSelectedOption = params === option.id
				const Icon = option.icon

				const handleClick = () => {
					const urlSearchParams = new URLSearchParams(searchParams)

					isSelectedOption
						? urlSearchParams.delete(ORDER_STATUS_PARAMS)
						: urlSearchParams.set(ORDER_STATUS_PARAMS, option.id)

					router.replace(`${pathname}?${urlSearchParams.toString()}`)
				}

				return (
					<Button
						key={option.id}
						variant={isSelectedOption ? 'default' : 'outline'}
						size="icon"
						onClick={handleClick}
					>
						<Icon className="size-4 shrink-0" />
					</Button>
				)
			})}
		</section>
	)
}
