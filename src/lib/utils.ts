import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

import {
	ApplyOrderFiltersArgs,
	ApplyProductFiltersArgs,
	CartItem,
	Category,
	CategoryName,
	NanoidArgs,
	Order,
	Product,
	RGB,
} from '@/lib/types'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function rupiah(value: number): string {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	})
		.format(value)
		.slice(0, -3)
}

export function formatCategoryName(name: Category['name']): CategoryName {
	return name.toLowerCase().split(' ').join('-') as CategoryName
}

export function parseCategoryName(name: CategoryName): Category['name'] {
	return name
		.split('-')
		.map((char) => {
			if (char !== 'and') {
				return char[0].toUpperCase() + char.slice(1)
			}

			return char
		})
		.join(' ')
}

function convert3To6DigitsHex(hex: string): string {
	return (
		'#' +
		hex
			.slice(1)
			.split('')
			.map((value) => value + value)
			.join('')
	)
}

function extractRgbFromHex(hex: string): RGB {
	const removedHashHex = hex.slice(1)

	const r = parseInt(removedHashHex.slice(0, 2), 16)
	const g = parseInt(removedHashHex.slice(2, 4), 16)
	const b = parseInt(removedHashHex.slice(4, 6), 16)

	return { r, g, b }
}

function lightenHex(value: number, percent: number): number {
	return Math.min(255, Math.floor(value + (255 - value) * (percent / 100)))
}

function formatHexValue(value: number): string {
	return value.toString(16).padStart(2, '0')
}

export function lightenColor(hex: string, percent: number): string {
	const formattedHex = hex.length === 3 ? convert3To6DigitsHex(hex) : hex
	const { r, g, b } = extractRgbFromHex(formattedHex)

	return `#${formatHexValue(lightenHex(r, percent))}${formatHexValue(lightenHex(g, percent))}${formatHexValue(lightenHex(b, percent))}`
}

export function applyProductFilters({
	products,
	query,
	categoryId,
}: ApplyProductFiltersArgs): Product[] {
	let filteredProducts = [...products]

	if (query) {
		filteredProducts = filteredProducts.filter((product) =>
			product.name.toLowerCase().includes(query.toLowerCase()),
		)
	}

	if (categoryId) {
		filteredProducts = filteredProducts.filter(
			(product) => product.categoryId === categoryId,
		)
	}

	return filteredProducts
}

export function applyOrderFilters({
	orders,
	orderStatus,
	paymentMethod,
	orderShippingType,
	transportationMethod,
}: ApplyOrderFiltersArgs): Order[] {
	let filteredOrders = [...orders]

	if (orderStatus) {
		filteredOrders = filteredOrders.filter(
			(order) =>
				(orderStatus === 'completed' && order.hasShipped) ||
				(orderStatus === 'uncompleted' && !order.hasShipped),
		)
	}

	if (paymentMethod) {
		filteredOrders = filteredOrders.filter(
			(order) => order.paymentMethod === paymentMethod,
		)
	}

	if (orderShippingType) {
		filteredOrders = filteredOrders.filter(
			(order) =>
				(orderShippingType === 'ship' && order.transportationMethod) ||
				(orderShippingType === 'shopping-bag' && !order.transportationMethod),
		)
	}

	if (transportationMethod) {
		filteredOrders = filteredOrders.filter(
			(order) => order.transportationMethod === transportationMethod,
		)
	}

	return filteredOrders
}

export function nanoid(
	{ size = 10, prefix }: NanoidArgs = { size: 10 },
): string {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

	return prefix && prefix.length !== 0
		? `${prefix}-${customAlphabet(alphabet, size)()}`
		: customAlphabet(alphabet, size)()
}

export function getOrderTotal(items: CartItem[]): number {
	return items.reduce(
		(value, item) => item.product.price * item.quantity + value,
		0,
	)
}
