'use client'

import { Check } from 'lucide-react'

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Customer } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useCustomer, useCustomerActions } from '@/store/customer'

interface CategoryCommandProps
	extends React.ComponentPropsWithoutRef<typeof Command> {
	customers: Customer[]
	onSelect: () => void
}

export default function CustomerCommand({
	customers,
	onSelect,
	className,
	...props
}: CategoryCommandProps) {
	const selectedCustomer = useCustomer()
	const customerActions = useCustomerActions()

	return (
		<Command className={cn('flex flex-col gap-4', className)} {...props}>
			<CommandInput placeholder="Search by customer name" />
			<ScrollArea className="flex-1">
				<CommandList className="max-h-none flex-1 overflow-hidden">
					<CommandEmpty>No customer found.</CommandEmpty>
					<CommandGroup className="flex flex-1 flex-col gap-2 p-0">
						{customers.map((customer, index) => {
							const isSelectedCustomer = selectedCustomer
								? selectedCustomer.id === customer.id
								: false

							const handleSelect = () => {
								customerActions.toggleCustomer(customer.id)

								onSelect()
							}

							return (
								<CommandItem
									key={customer.id}
									value={customer.name}
									onSelect={handleSelect}
									className={cn(
										'cursor-pointer gap-2 rounded-none border border-input bg-background shadow-sm',
										index !== 0 && 'border-t-0',
									)}
								>
									<Check
										className={cn(
											'size-4 shrink-0 opacity-0 transition-opacity',
											isSelectedCustomer && 'opacity-100',
										)}
									/>
									<span className="text-sm">{customer.name}</span>
								</CommandItem>
							)
						})}
					</CommandGroup>
				</CommandList>
			</ScrollArea>
		</Command>
	)
}
