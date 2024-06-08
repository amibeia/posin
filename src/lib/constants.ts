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
	ShoppingBag,
	Truck,
	Zap,
} from 'lucide-react'

import {
	BagType,
	BagTypeOption,
	CategoryName,
	CategoryOption,
	OrderStatus,
	OrderStatusOption,
	OrderType,
	PaymentMethod,
	PaymentMethodOption,
	TransportationMethod,
	TransportationMethodOption,
} from '@/lib/types'

export const QUERY_PARAMS = 'query'
export const CATEGORY_PARAMS = 'category'
export const ORDER_TYPE_PARAMS = 'order-type'
export const PAYMENT_METHOD_PARAMS = 'payment-method'
export const TRANSPORTATION_METHOD_PARAMS = 'transportation-method'
export const ORDER_STATUS_PARAMS = 'order-status'

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
export const BAG_TYPES = ['shopping-bag'] as const
export const TRANSPORTATION_METHODS = [
	's-truck',
	'm-truck',
	'l-truck',
	'motor-cycle',
] as const
export const ORDER_STATUS = ['completed', 'uncompleted'] as const
export const ORDER_TYPES = ['customer-order', 'inventory-order'] as const

export const DEFAULT_IS_NEED_SHIPPED: boolean = false
export const DEFAULT_PAYMENT_METHOD: PaymentMethod = 'cash'
export const DEFAULT_TRANSPORTATION_METHOD: TransportationMethod = 's-truck'
export const DEFAULT_ORDER_TYPE: OrderType = 'customer-order'

export const CATEGORY_OPTION: CategoryOption[] = [
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
export const PAYMENT_METHOD_OPTIONS: PaymentMethodOption[] = [
	{ id: 'cash', label: 'Cash', icon: CircleDollarSign },
	{ id: 'credit-card', label: 'Credit Card', icon: CreditCard },
	{ id: 'e-wallet', label: 'E-Wallet', icon: QrCode },
]
export const BAG_TYPE_OPTIONS: BagTypeOption[] = [
	{ id: 'shopping-bag', label: 'Shopping Bag', icon: ShoppingBag },
]
export const TRANSPORTATION_METHOD_OPTIONS: TransportationMethodOption[] = [
	{ id: 's-truck', label: 'S Truck', icon: Car },
	{ id: 'm-truck', label: 'M Truck', icon: Bus },
	{ id: 'l-truck', label: 'L Truck', icon: Truck },
	{ id: 'motor-cycle', label: 'M Cycle', icon: Bike },
]
export const ORDER_STATUS_OPTIONS: OrderStatusOption[] = [
	{ id: 'completed', label: 'Completed', icon: CircleCheck },
	{ id: 'uncompleted', label: 'Uncompleted', icon: CircleX },
]

export const CATEGORY_ICONS: LucideIcon[] = CATEGORY_OPTION.map(
	(obj) => obj.icon,
)
export const PAYMENT_METHOD_ICONS: LucideIcon[] = PAYMENT_METHOD_OPTIONS.map(
	(obj) => obj.icon,
)
export const BAG_TYPE_ICONS: LucideIcon[] = BAG_TYPE_OPTIONS.map(
	(obj) => obj.icon,
)
export const TRANSPORTATION_METHOD_ICONS: LucideIcon[] =
	TRANSPORTATION_METHOD_OPTIONS.map((obj) => obj.icon)
export const ORDER_STATUS_ICONS: LucideIcon[] = ORDER_STATUS_OPTIONS.map(
	(obj) => obj.icon,
)

export const CATEGORY_ICON_MAP: Map<CategoryName, LucideIcon> = new Map(
	CATEGORY_OPTION.map((obj) => [obj.id, obj.icon]),
)
export const PAYMENT_METHOD_ICON_MAP: Map<PaymentMethod, LucideIcon> = new Map(
	PAYMENT_METHOD_OPTIONS.map((obj) => [obj.id, obj.icon]),
)
export const BAG_TYPE_ICON_MAP: Map<BagType, LucideIcon> = new Map(
	BAG_TYPE_OPTIONS.map((obj) => [obj.id, obj.icon]),
)
export const TRANSPORTATION_METHOD_ICON_MAP: Map<
	TransportationMethod,
	LucideIcon
> = new Map(TRANSPORTATION_METHOD_OPTIONS.map((obj) => [obj.id, obj.icon]))
export const ORDER_STATUS_ICON_MAP: Map<OrderStatus, LucideIcon> = new Map(
	ORDER_STATUS_OPTIONS.map((obj) => [obj.id, obj.icon]),
)
