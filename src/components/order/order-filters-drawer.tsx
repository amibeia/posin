'use client'

import { ArrowDown, SlidersHorizontal } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import OrderFilters from '@/components/order/order-filters'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import {
	CATEGORIES_PARAMS,
	ORDER_SHIPPING_TYPE_PARAMS,
	ORDER_STATUS_PARAMS,
	PAYMENT_METHOD_PARAMS,
	TRANSPORTATION_METHOD_PARAMS,
} from '@/lib/constants'

export default function OrderFiltersDrawer() {
	const [open, setOpen] = useState(false)

	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const isOrderFiltersExist =
		Boolean(searchParams.get(CATEGORIES_PARAMS)) ||
		Boolean(searchParams.get(ORDER_SHIPPING_TYPE_PARAMS)) ||
		Boolean(searchParams.get(ORDER_STATUS_PARAMS)) ||
		Boolean(searchParams.get(PAYMENT_METHOD_PARAMS)) ||
		Boolean(searchParams.get(TRANSPORTATION_METHOD_PARAMS))

	const handleResetFilters = () => {
		const urlSearchParams = new URLSearchParams(searchParams)

		urlSearchParams.delete(CATEGORIES_PARAMS)
		urlSearchParams.delete(ORDER_SHIPPING_TYPE_PARAMS)
		urlSearchParams.delete(ORDER_STATUS_PARAMS)
		urlSearchParams.delete(PAYMENT_METHOD_PARAMS)
		urlSearchParams.delete(TRANSPORTATION_METHOD_PARAMS)

		router.replace(`${pathname}?${urlSearchParams.toString()}`)
	}

	return (
		<Drawer open={open} onOpenChange={setOpen} dismissible={false}>
			<DrawerTrigger asChild>
				<Button variant="ghost" className="gap-2">
					<SlidersHorizontal className="size-4 shrink-0" />
					<span className="text-sm">Filters</span>
				</Button>
			</DrawerTrigger>
			<DrawerContent className="mx-auto max-w-xl">
				<DrawerHeader>
					<DrawerTitle>Order Filters</DrawerTitle>
				</DrawerHeader>
				<OrderFilters />
				<Separator />
				<DrawerFooter className="flex-row justify-between">
					<DrawerClose asChild>
						<Button
							variant="outline"
							size="icon"
							className="size-10 shrink-0 rounded-full"
						>
							<ArrowDown className="size-4 shrink-0" />
						</Button>
					</DrawerClose>
					<Button
						size="lg"
						className="rounded-full"
						disabled={!isOrderFiltersExist}
						onClick={handleResetFilters}
					>
						Reset
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
