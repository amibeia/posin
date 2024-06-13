import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { PREFIX_ADDRESS_ID, PREFIX_CUSTOMER_ID } from '@/lib/constants'
import { AddCustomerArgs, Address, Customer, CustomerOrder } from '@/lib/types'
import { nanoid } from '@/lib/utils'

type CustomerState = {
	customer: CustomerOrder | null
	customers: Customer[]
}

type CustomerActions = {
	actions: {
		addCustomer: (args: AddCustomerArgs) => void
		toggleCustomer: (id: Customer['id']) => void
		addAddressToCustomer: (location: Address['location']) => void
		toggleAddress: (id: Address['id']) => void
		reset: () => void
	}
}

const initialState: CustomerState = {
	customer: null,
	customers: [],
}

const customerStore = create<CustomerState & CustomerActions>()(
	persist(
		(set) => ({
			...initialState,
			actions: {
				addCustomer: ({ name, phoneNumber = null }) =>
					set((state) => {
						const customer: CustomerOrder = {
							id: nanoid({ prefix: PREFIX_CUSTOMER_ID }),
							name,
							phoneNumber,
							address: null,
						}

						return {
							customer,
							customers: [
								...state.customers,
								{
									id: customer.id,
									name: customer.name,
									phoneNumber: customer.phoneNumber,
									addresses: [],
								},
							],
						}
					}),
				toggleCustomer: (id) =>
					set((state) => {
						const customer = state.customers.find(
							(customer) => customer.id === id,
						)!

						return state.customer && state.customer.id === id
							? { customer: null }
							: {
									customer: {
										id: customer.id,
										name: customer.name,
										phoneNumber: customer.phoneNumber,
										address: null,
									},
								}
					}),
				addAddressToCustomer: (location) =>
					set((state) => {
						const address: Address = {
							id: nanoid({ prefix: PREFIX_ADDRESS_ID }),
							location,
						}

						return state.customer
							? {
									customer: {
										...state.customer,
										address,
									},
									customers: state.customers.map((customer) => {
										return state.customer && state.customer.id === customer.id
											? {
													...customer,
													addresses: [...customer.addresses, address],
												}
											: customer
									}),
								}
							: state
					}),
				toggleAddress: (id) =>
					set((state) => {
						const customer = state.customers.find((customer) => {
							return state.customer && state.customer.id === customer.id
						})!

						return state.customer
							? {
									customer: {
										...state.customer,
										address:
											state.customer.address && state.customer.address.id === id
												? null
												: customer.addresses.find(
														(address) => address.id === id,
													)!,
									},
								}
							: state
					}),
				reset: () => set({ customer: initialState.customer }),
			},
		}),
		{
			name: 'customer-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				customer: state.customer,
				customers: state.customers,
			}),
		},
	),
)

export const useCustomer = () => customerStore((state) => state.customer)
export const useCustomers = () => customerStore((state) => state.customers)
export const useCustomerActions = () => customerStore((state) => state.actions)
