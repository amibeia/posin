'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { CATEGORIES_PARAMS, CATEGORY_OPTIONS } from '@/lib/constants'

export default function CategoriesFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const params = searchParams.get(CATEGORIES_PARAMS) || undefined
	const parsedParams = params ? params.split(', ') : undefined

	return (
		<section className="flex flex-wrap items-center justify-end gap-2">
			{CATEGORY_OPTIONS.map((option) => {
				const isSelectedOption = params ? params.includes(option.id) : false
				const Icon = option.icon

				const handleClick = () => {
					const urlSearchParams = new URLSearchParams(searchParams)

					if (isSelectedOption && parsedParams && parsedParams.length === 1) {
						urlSearchParams.delete(CATEGORIES_PARAMS)
					}

					if (isSelectedOption && parsedParams && parsedParams.length > 1) {
						urlSearchParams.set(
							CATEGORIES_PARAMS,
							parsedParams.filter((param) => param !== option.id).join(', '),
						)
					}

					if (!isSelectedOption) {
						urlSearchParams.set(
							CATEGORIES_PARAMS,
							parsedParams
								? [...parsedParams, option.id]
										.sort((a, b) => (a < b ? -1 : 1))
										.join(', ')
								: option.id,
						)
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
