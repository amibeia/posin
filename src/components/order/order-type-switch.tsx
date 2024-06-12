'use client'

import { ListMinus, ListPlus } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Switch } from '@/components/ui/switch'

import { DEFAULT_ORDER_TYPE, ORDER_TYPE_PARAMS } from '@/lib/constants'
import { OrderType } from '@/lib/types'
import { cn } from '@/lib/utils'

export default function OrderTypeSwitch() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const orderType =
		(searchParams.get(ORDER_TYPE_PARAMS) as OrderType) || DEFAULT_ORDER_TYPE

	const handleCheckedChange = () => {
		const urlSearchParams = new URLSearchParams(searchParams)

		urlSearchParams.set(
			ORDER_TYPE_PARAMS,
			orderType === 'customer-order' ? 'inventory-order' : 'customer-order',
		)

		router.replace(`${pathname}?${urlSearchParams.toString()}`)
	}

	const iconStyle = {
		className: 'size-4 shrink-0 text-muted-foreground transition-colors',
	}

	return (
		<div className="flex items-center gap-2">
			<ListMinus
				className={cn(
					iconStyle.className,
					orderType === 'customer-order' && 'text-accent-foreground',
				)}
			/>
			<Switch
				checked={orderType === 'inventory-order'}
				onCheckedChange={handleCheckedChange}
			/>
			<ListPlus
				className={cn(
					iconStyle.className,
					orderType === 'inventory-order' && 'text-accent-foreground',
				)}
			/>
		</div>
	)
}
