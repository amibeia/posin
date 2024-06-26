'use client'

import { User } from 'lucide-react'
import { useState } from 'react'

import CustomerCommand from '@/components/customer/customer-command'
import DrawerFooter from '@/components/global/drawer-footer'
import { Button } from '@/components/ui/button'
import {
	DrawerContent,
	DrawerHeader,
	DrawerNested,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'

import { useCustomer, useCustomers } from '@/store/customer'

export default function SelectCustomerDrawer() {
	const [open, setOpen] = useState(false)
	const customer = useCustomer()
	const customers = useCustomers()

	return (
		<DrawerNested open={open} onOpenChange={setOpen} dismissible={false}>
			<DrawerTrigger asChild>
				<Button size="sm" className="w-fit gap-2">
					<User className="size-4 shrink-0" />
					<span className="text-sm">
						{customer ? customer.name : 'Select Customer'}
					</span>
				</Button>
			</DrawerTrigger>
			<DrawerContent className="mx-auto h-[91dvh] max-w-xl">
				<DrawerHeader>
					<DrawerTitle>Select Customer</DrawerTitle>
				</DrawerHeader>
				<CustomerCommand
					customers={customers}
					onSelect={() => setOpen(false)}
					className="flex-1 p-3"
				/>
				<Separator />
				<DrawerFooter />
			</DrawerContent>
		</DrawerNested>
	)
}
