'use client'

import { useCommandState } from 'cmdk'

import { Button } from '@/components/ui/button'

import { useCustomerActions } from '@/store/customer'

interface AddCustomerButtonProps {
	onClick: () => void
}

export default function AddCustomerButton({ onClick }: AddCustomerButtonProps) {
	const customerActions = useCustomerActions()

	const search = useCommandState((state) => state.search)

	const handleAddCustomerClick = () => {
		customerActions.addCustomer({ name: search, phoneNumber: null })

		onClick()
	}

	return (
		<Button disabled={search.length === 0} onClick={handleAddCustomerClick}>
			Add Customer
		</Button>
	)
}
