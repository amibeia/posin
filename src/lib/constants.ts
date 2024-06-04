import { CircleDollarSign, CreditCard, QrCode } from 'lucide-react'

import { Order, PaymentMethod, PaymentMethodOption } from '@/lib/types'

export const PREFIX_PRODUCT_ID = 'P'
export const PREFIX_CATEGORY_ID = 'C'
export const PREFIX_ORDER_ID = 'O'

export const DEFAULT_PAYMENT_METHOD: PaymentMethod = 'cash'
export const DEFAULT_IS_NEED_SHIPPED: Order['isNeedShipped'] = false
export const DEFAULT_HAS_SHIPPED: Order['hasShipped'] = false

export const PAYMENT_METHOD_OPTIONS: PaymentMethodOption[] = [
	{ id: 'cash', label: 'Cash', icon: CircleDollarSign },
	{ id: 'credit-card', label: 'Credit Card', icon: CreditCard },
	{ id: 'e-wallet', label: 'E-Wallet', icon: QrCode },
]

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
