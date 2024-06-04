import { LucideIcon } from 'lucide-react'

import {
	CATEGORY_NAMES,
	PAYMENT_IDS,
	TRANSPORTATION_IDS,
} from '@/lib/constants'

export type CategoryName = (typeof CATEGORY_NAMES)[number]
export type Category = {
	id: string
	name: CategoryName
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

export type PaymentMethod = (typeof PAYMENT_IDS)[number]
export type PaymentMethodOption = {
	id: PaymentMethod
	label: string
	icon: LucideIcon
}

export type TransportationMethod = (typeof TRANSPORTATION_IDS)[number]
export type TransportationMethodOption = {
	id: TransportationMethod
	label: string
	icon: LucideIcon
}

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

export type ApplyProductFilterArgs = {
	products: Product[]
	categoryId: Category['id']
}
export type AddProductArgs = Omit<Product, 'id'>
export type AddOrderArgs = Pick<Order, 'items'>
export type NanoidArgs = {
	size?: number
	prefix?: string
}
