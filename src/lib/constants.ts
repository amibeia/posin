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
	PaymentMethod,
	PaymentMethodOption,
	TransportationMethod,
	TransportationMethodOption,
} from '@/lib/types'

export const PREFIX_PRODUCT_ID = 'P'
export const PREFIX_CATEGORY_ID = 'C'
export const PREFIX_ORDER_ID = 'O'

export const DEFAULT_IS_NEED_SHIPPED: boolean = false
export const DEFAULT_TRANSPORTATION_METHOD: TransportationMethod = 's-truck'
export const DEFAULT_PAYMENT_METHOD: PaymentMethod = 'cash'

export const CATEGORY_NAMES = [
	'Adhesives',
	'Concrete and Masonry',
	'Construction Tools',
	'Electrical Supplies',
	'Fasteners and Hardware',
	'Flooring Materials',
	'Painting Supplies',
	'Plumbing Materials',
] as const

export const PAYMENT_IDS = ['cash', 'credit-card', 'e-wallet'] as const
export const PAYMENT_METHOD_OPTIONS: PaymentMethodOption[] = [
	{ id: 'cash', label: 'Cash', icon: CircleDollarSign },
	{ id: 'credit-card', label: 'Credit Card', icon: CreditCard },
	{ id: 'e-wallet', label: 'E-Wallet', icon: QrCode },
]

export const TRANSPORTATION_IDS = [
	's-truck',
	'm-truck',
	'l-truck',
	'motor-cycle',
] as const
export const TRANSPORTATION_METHOD_OPTIONS: TransportationMethodOption[] = [
	{ id: 's-truck', label: 'S Truck', icon: Car },
	{ id: 'm-truck', label: 'M Truck', icon: Bus },
	{ id: 'l-truck', label: 'L Truck', icon: Truck },
	{ id: 'motor-cycle', label: 'M Cycle', icon: Bike },
]
