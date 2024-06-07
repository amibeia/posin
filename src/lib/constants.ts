import {
	Bike,
	Bus,
	Car,
	CircleDollarSign,
	CreditCard,
	QrCode,
	Truck,
} from 'lucide-react'

import {
	OrderType,
	PaymentMethod,
	PaymentMethodOption,
	TransportationMethod,
	TransportationMethodOption,
} from '@/lib/types'

export const QUERY_PARAMS = 'query'
export const CATEGORY_PARAMS = 'category'
export const ORDER_TYPE_PARAMS = 'order-type'

export const PREFIX_PRODUCT_ID = 'P'
export const PREFIX_CATEGORY_ID = 'C'
export const PREFIX_ORDER_ID = 'O'

export const CATEGORIES = [
	'adhesives',
	'concrete-and-masonry',
	'construction-tools',
	'electrical-supplies',
	'fasteners-and-hardware',
	'flooring-materials',
	'painting-supplies',
	'plumbing-materials',
] as const
export const PAYMENT_METHODS = ['cash', 'credit-card', 'e-wallet'] as const
export const TRANSPORTATION_METHODS = [
	's-truck',
	'm-truck',
	'l-truck',
	'motor-cycle',
] as const
export const ORDER_TYPES = ['customer-order', 'inventory-order'] as const

export const DEFAULT_IS_NEED_SHIPPED: boolean = false
export const DEFAULT_PAYMENT_METHOD: PaymentMethod = 'cash'
export const DEFAULT_TRANSPORTATION_METHOD: TransportationMethod = 's-truck'
export const DEFAULT_ORDER_TYPE: OrderType = 'customer-order'

export const PAYMENT_METHOD_OPTIONS: PaymentMethodOption[] = [
	{ id: 'cash', label: 'Cash', icon: CircleDollarSign },
	{ id: 'credit-card', label: 'Credit Card', icon: CreditCard },
	{ id: 'e-wallet', label: 'E-Wallet', icon: QrCode },
]

export const TRANSPORTATION_METHOD_OPTIONS: TransportationMethodOption[] = [
	{ id: 's-truck', label: 'S Truck', icon: Car },
	{ id: 'm-truck', label: 'M Truck', icon: Bus },
	{ id: 'l-truck', label: 'L Truck', icon: Truck },
	{ id: 'motor-cycle', label: 'M Cycle', icon: Bike },
]
