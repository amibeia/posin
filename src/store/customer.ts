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
						const customer: Customer = {
							id: nanoid({ prefix: PREFIX_CUSTOMER_ID }),
							name,
							phoneNumber,
							addresses: [],
						}

						return {
							customer: {
								id: customer.id,
								name: customer.name,
								phoneNumber: customer.phoneNumber,
								address: null,
							},
							customers: [...state.customers, customer],
						}
					}),
				toggleCustomer: (id) =>
					set((state) => {
						if (state.customer && state.customer.id === id) {
							return {
								customer: null,
							}
						}

						const customer = state.customers.find(
							(customer) => customer.id === id,
						)!

						return {
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

						return {
							customer: state.customer
								? {
										...state.customer,
										address,
									}
								: state.customer,
							customers: state.customers.map((customer) => {
								if (state.customer) {
									return customer.id === state.customer.id
										? {
												...customer,
												addresses: [...customer.addresses, address],
											}
										: customer
								}

								return customer
							}),
						}
					}),
				toggleAddress: (id) =>
					set((state) => {
						const customer = state.customers.find((customer) => {
							if (state.customer) {
								return customer.id === state.customer.id
							}

							return false
						})!

						if (
							state.customer &&
							state.customer.address &&
							state.customer.address.id === id
						) {
							return {
								customer: {
									...state.customer,
									address: null,
								},
							}
						}

						if (customer.addresses) {
							return {
								customer: {
									id: customer.id,
									name: customer.name,
									phoneNumber: customer.phoneNumber,
									address: customer.addresses.find(
										(address) => address.id === id,
									)!,
								},
							}
						}

						return state
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
