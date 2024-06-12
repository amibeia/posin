import { LucideIcon } from 'lucide-react'

import {
	CATEGORIES,
	ORDER_SHIPPING_TYPES,
	ORDER_STATUS,
	ORDER_TYPES,
	PAYMENT_METHODS,
	POSIN_ROUTES,
	TRANSPORTATION_METHODS,
} from '@/lib/constants'

export type PosinRoute = (typeof POSIN_ROUTES)[number]
export type CategoryName = (typeof CATEGORIES)[number]
export type PaymentMethod = (typeof PAYMENT_METHODS)[number]
export type OrderShippingType = (typeof ORDER_SHIPPING_TYPES)[number]
export type TransportationMethod = (typeof TRANSPORTATION_METHODS)[number]
export type OrderStatus = (typeof ORDER_STATUS)[number]
export type OrderType = (typeof ORDER_TYPES)[number]

export type Category = {
	id: string
	name: string
	color: string
}

export type Product = {
	id: string
	name: string
	price: number
	categoryId: Category['id']
}

export type CartItem = {
	product: Product
	quantity: number
}
export type Cart = CartItem[]

export type Address = {
	id: string
	location: string
}

export type Customer = {
	id: string
	name: string
	phoneNumber: string | null
	addresses: Address[]
}

export type CustomerOrder = Pick<Customer, 'id' | 'name' | 'phoneNumber'> & {
	address: Address | null
}

export type Order = {
	id: string
	items: CartItem[]
	customer: CustomerOrder | null
	address: Address | null
	hasShipped: boolean
	transportationMethod: TransportationMethod | null
	paymentMethod: PaymentMethod
	createdAt: Date
	updatedAt: Date
}

export type RGB = {
	r: number
	g: number
	b: number
}

export type CategoryOption = {
	id: CategoryName
	label: string
	icon: LucideIcon
}
export type PaymentMethodOption = {
	id: PaymentMethod
	label: string
	icon: LucideIcon
}
export type OrderShippingTypeOption = {
	id: OrderShippingType
	label: string
	icon: LucideIcon
}
export type TransportationMethodOption = {
	id: TransportationMethod
	label: string
	icon: LucideIcon
}
export type OrderStatusOption = {
	id: OrderStatus
	label: string
	icon: LucideIcon
}

export type ApplyProductFiltersArgs = {
	products: Product[]
	query?: string
	categoryId?: Category['id']
}
export type ApplyOrderFiltersArgs = {
	orders: Order[]
	categories: Category[]
	filters?: {
		orderStatus?: OrderStatus
		paymentMethod?: PaymentMethod
		orderShippingType?: OrderShippingType
		transportationMethod?: TransportationMethod
		categories?: string
	}
}
export type AddProductArgs = Omit<Product, 'id'>
export type AddOrderArgs = Pick<Order, 'items'> & {
	customer: CustomerOrder | null
}
export type NanoidArgs = {
	size?: number
	prefix?: string
}
export type GenerateWorkSheetArgs<T> = {
	json: T[]
	options?: {
		header?: string[]
	}
}
export type AddCustomerArgs = Pick<Customer, 'name' | 'phoneNumber'>
