'use client'

import { MapPin } from 'lucide-react'
import { forwardRef, useState } from 'react'

import CustomerAddressCommand from '@/components/customer/customer-address-command'
import DrawerFooter from '@/components/global/drawer-footer'
import { Button, ButtonProps } from '@/components/ui/button'
import {
	DrawerContent,
	DrawerHeader,
	DrawerNested,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'
import { useCustomer, useCustomers } from '@/store/customer'

const SelectCustomerAddressDrawer = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, ...props }, ref) => {
		const [open, setOpen] = useState(false)
		const customer = useCustomer()
		const customers = useCustomers()

		const selectedCustomer = customers.find(
			({ id }) => customer && customer.id === id,
		)

		const addresses = selectedCustomer ? selectedCustomer.addresses : []

		return (
			<DrawerNested open={open} onOpenChange={setOpen} dismissible={false}>
				<DrawerTrigger asChild>
					<Button
						ref={ref}
						size="sm"
						className={cn('w-fit max-w-[200px] gap-2', className)}
						{...props}
					>
						<MapPin className="size-4 shrink-0" />
						<span className="truncate text-sm">
							{customer && customer.address
								? customer.address.location
								: 'Select Address'}
						</span>
					</Button>
				</DrawerTrigger>
				<DrawerContent className="mx-auto h-[91dvh] max-w-xl">
					<DrawerHeader>
						<DrawerTitle>Select Address</DrawerTitle>
					</DrawerHeader>
					<CustomerAddressCommand
						addresses={addresses}
						onSelect={() => setOpen(false)}
						className="flex-1 p-3"
					/>
					<Separator />
					<DrawerFooter />
				</DrawerContent>
			</DrawerNested>
		)
	},
)
SelectCustomerAddressDrawer.displayName = 'SelectCustomerAddressDrawer'

export default SelectCustomerAddressDrawer
