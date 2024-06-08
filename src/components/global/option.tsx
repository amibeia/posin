'use client'

import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

interface OptionProps {
	value: string
	paramsName: string
	Icon: LucideIcon
}

export default function Option({ value, paramsName, Icon }: OptionProps) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const paramsValue = searchParams.get(paramsName)
	const isSelectedOption = paramsValue === value

	const handleClick = () => {
		const urlSearchParams = new URLSearchParams(searchParams)

		isSelectedOption
			? urlSearchParams.delete(paramsName)
			: urlSearchParams.set(paramsName, value)

		router.replace(`${pathname}?${urlSearchParams.toString()}`)
	}

	return (
		<Button
			variant={isSelectedOption ? 'default' : 'outline'}
			size="icon"
			onClick={handleClick}
		>
			<Icon className="size-4 shrink-0" />
		</Button>
	)
}
