import {
	Bike,
	Bolt,
	Brush,
	Bus,
	Car,
	CircleCheck,
	CircleDollarSign,
	CircleX,
	CreditCard,
	Droplet,
	Hammer,
	HardHat,
	Layers,
	LucideIcon,
	Package,
	QrCode,
	Ship,
	ShoppingBag,
	Truck,
	Zap,
} from 'lucide-react'

import {
	CategoryName,
	CategoryOption,
	OrderShippingType,
	OrderShippingTypeOption,
	OrderStatus,
	OrderStatusOption,
	OrderType,
	PaymentMethod,
	PaymentMethodOption,
	TransportationMethod,
	TransportationMethodOption,
} from '@/lib/types'

export const LAZY_COMPONENT_DELAY = 2000

export const QUERY_PARAMS = 'query'
export const CATEGORY_PARAMS = 'category'
export const ORDER_STATUS_PARAMS = 'order-status'
export const ORDER_SHIPPING_TYPE_PARAMS = 'order-shipped-type'
export const ORDER_TYPE_PARAMS = 'order-type'
export const PAYMENT_METHOD_PARAMS = 'payment-method'
export const TRANSPORTATION_METHOD_PARAMS = 'transportation-method'
export const CATEGORIES_PARAMS = 'categories'

export const PREFIX_PRODUCT_ID = 'P'
export const PREFIX_CATEGORY_ID = 'C'
export const PREFIX_ORDER_ID = 'O'
export const PREFIX_CUSTOMER_ID = 'U'
export const PREFIX_ADDRESS_ID = 'A'

export const POSIN_ROUTES = ['/', '/orders', '/stock-monitor'] as const
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
export const ORDER_STATUS = ['completed', 'uncompleted'] as const
export const ORDER_SHIPPING_TYPES = ['shopping-bag', 'ship'] as const
export const ORDER_TYPES = ['customer-order', 'inventory-order'] as const
export const PAYMENT_METHODS = ['cash', 'credit-card', 'e-wallet'] as const
export const TRANSPORTATION_METHODS = [
	's-truck',
	'm-truck',
	'l-truck',
	'motor-cycle',
] as const

export const DEFAULT_ORDER_TYPE: OrderType = 'customer-order'
export const DEFAULT_IS_NEED_SHIPPED: boolean = false
export const DEFAULT_PAYMENT_METHOD: PaymentMethod = 'cash'
export const DEFAULT_TRANSPORTATION_METHOD: TransportationMethod = 's-truck'

export const CATEGORY_OPTIONS: CategoryOption[] = [
	{ id: 'adhesives', label: 'Adhesives', icon: Package },
	{
		id: 'concrete-and-masonry',
		label: 'Concrete and Masonry',
		icon: HardHat,
	},
	{ id: 'construction-tools', label: 'Construction Tools', icon: Hammer },
	{ id: 'electrical-supplies', label: 'Electrical Supplies', icon: Zap },
	{
		id: 'fasteners-and-hardware',
		label: 'Fasteners and Hardware',
		icon: Bolt,
	},
	{ id: 'flooring-materials', label: 'Flooring Materials', icon: Layers },
	{ id: 'painting-supplies', label: 'Painting Supplies', icon: Brush },
	{ id: 'plumbing-materials', label: 'Plumbing Materials', icon: Droplet },
]
export const ORDER_STATUS_OPTIONS: OrderStatusOption[] = [
	{ id: 'completed', label: 'Completed', icon: CircleCheck },
	{ id: 'uncompleted', label: 'Uncompleted', icon: CircleX },
]
export const ORDER_SHIPPING_TYPE_OPTIONS: OrderShippingTypeOption[] = [
	{ id: 'shopping-bag', label: 'Shopping Bag', icon: ShoppingBag },
	{ id: 'ship', label: 'Ship', icon: Ship },
]
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

export const CATEGORY_ICONS: LucideIcon[] = CATEGORY_OPTIONS.map(
	(obj) => obj.icon,
)
export const ORDER_STATUS_ICONS: LucideIcon[] = ORDER_STATUS_OPTIONS.map(
	(obj) => obj.icon,
)
export const ORDER_SHIPPING_ICONS: LucideIcon[] =
	ORDER_SHIPPING_TYPE_OPTIONS.map((obj) => obj.icon)
export const PAYMENT_METHOD_ICONS: LucideIcon[] = PAYMENT_METHOD_OPTIONS.map(
	(obj) => obj.icon,
)
export const TRANSPORTATION_METHOD_ICONS: LucideIcon[] =
	TRANSPORTATION_METHOD_OPTIONS.map((obj) => obj.icon)

export const CATEGORY_ICON_MAP: Map<CategoryName, LucideIcon> = new Map(
	CATEGORY_OPTIONS.map((obj) => [obj.id, obj.icon]),
)
export const ORDER_STATUS_ICON_MAP: Map<OrderStatus, LucideIcon> = new Map(
	ORDER_STATUS_OPTIONS.map((obj) => [obj.id, obj.icon]),
)
export const ORDER_SHIPPING_ICON_MAP: Map<OrderShippingType, LucideIcon> =
	new Map(ORDER_SHIPPING_TYPE_OPTIONS.map((obj) => [obj.id, obj.icon]))
export const PAYMENT_METHOD_ICON_MAP: Map<PaymentMethod, LucideIcon> = new Map(
	PAYMENT_METHOD_OPTIONS.map((obj) => [obj.id, obj.icon]),
)
export const TRANSPORTATION_METHOD_ICON_MAP: Map<
	TransportationMethod,
	LucideIcon
> = new Map(TRANSPORTATION_METHOD_OPTIONS.map((obj) => [obj.id, obj.icon]))
