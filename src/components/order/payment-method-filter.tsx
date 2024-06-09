'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { PAYMENT_METHOD_OPTIONS, PAYMENT_METHOD_PARAMS } from '@/lib/constants'

export default function PaymentMethodFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const params = searchParams.get(PAYMENT_METHOD_PARAMS) || undefined

	return (
		<section className="flex items-center gap-2">
			{PAYMENT_METHOD_OPTIONS.map((option) => {
				const isSelectedOption = params === option.id
				const Icon = option.icon

				const handleClick = () => {
					const urlSearchParams = new URLSearchParams(searchParams)

					isSelectedOption
						? urlSearchParams.delete(PAYMENT_METHOD_PARAMS)
						: urlSearchParams.set(PAYMENT_METHOD_PARAMS, option.id)

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
