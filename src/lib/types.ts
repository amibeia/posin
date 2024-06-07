import { LucideIcon } from 'lucide-react'

import {
	CATEGORIES,
	ORDER_TYPES,
	PAYMENT_METHODS,
	TRANSPORTATION_METHODS,
} from '@/lib/constants'

export type CategoryName = (typeof CATEGORIES)[number]
export type PaymentMethod = (typeof PAYMENT_METHODS)[number]
export type TransportationMethod = (typeof TRANSPORTATION_METHODS)[number]
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

export type Order = {
	id: string
	items: CartItem[]
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

export type PaymentMethodOption = {
	id: PaymentMethod
	label: string
	icon: LucideIcon
}

export type TransportationMethodOption = {
	id: TransportationMethod
	label: string
	icon: LucideIcon
}

export type ApplyProductFilterArgs = {
	products: Product[]
	query: string
	categoryId: Category['id']
}

export type AddProductArgs = Omit<Product, 'id'>
export type AddOrderArgs = Pick<Order, 'items'>
export type NanoidArgs = {
	size?: number
	prefix?: string
}
