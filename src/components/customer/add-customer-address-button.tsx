'use client'

import { useCommandState } from 'cmdk'

import { Button } from '@/components/ui/button'

import { useCustomerActions } from '@/store/customer'

interface AddCustomerAddressButtonProps {
	onClick: () => void
}

export default function AddCustomerAddressButton({
	onClick,
}: AddCustomerAddressButtonProps) {
	const customerActions = useCustomerActions()

	const search = useCommandState((state) => state.search)

	const handleAddCustomerAddressClick = () => {
		customerActions.addAddressToCustomer(search)

		onClick()
	}

	return (
		<Button
			disabled={search.length === 0}
			onClick={handleAddCustomerAddressClick}
		>
			Add Address
		</Button>
	)
}
