'use client'

import { Check } from 'lucide-react'

import AddCustomerAddressButton from '@/components/customer/add-customer-address-button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Address } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useCustomer, useCustomerActions } from '@/store/customer'

interface CategoryCommandProps
	extends React.ComponentPropsWithoutRef<typeof Command> {
	addresses: Address[]
	onSelect: () => void
}

export default function CustomerAddressCommand({
	addresses,
	onSelect,
	className,
	...props
}: CategoryCommandProps) {
	const selectedCustomer = useCustomer()
	const customerActions = useCustomerActions()

	return (
		<Command className={cn('flex flex-col gap-4', className)} {...props}>
			<CommandInput placeholder="Search by address location" />
			<ScrollArea className="flex-1">
				<CommandList className="max-h-none flex-1 overflow-hidden">
					<CommandEmpty className="flex flex-col items-center justify-center gap-4">
						<span>No address found.</span>
						<AddCustomerAddressButton onClick={onSelect} />
					</CommandEmpty>
					<CommandGroup className="flex flex-1 flex-col gap-2 p-0">
						{addresses.map((address, index) => {
							const isAddressSelected =
								selectedCustomer && selectedCustomer.address
									? selectedCustomer.address.id === address.id
									: false

							const handleSelect = () => {
								customerActions.toggleAddress(address.id)

								onSelect()
							}

							return (
								<CommandItem
									key={address.id}
									value={address.location}
									onSelect={handleSelect}
									className={cn(
										'cursor-pointer gap-2 rounded-none border border-input bg-background shadow-sm',
										index !== 0 && 'border-t-0',
									)}
								>
									<Check
										className={cn(
											'size-4 shrink-0 opacity-0 transition-opacity',
											isAddressSelected && 'opacity-100',
										)}
									/>
									<span className="text-sm">{address.location}</span>
								</CommandItem>
							)
						})}
					</CommandGroup>
				</CommandList>
			</ScrollArea>
		</Command>
	)
}
