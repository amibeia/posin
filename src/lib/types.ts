export type CategoryName =
	| 'Flooring Materials'
	| 'Fasteners and Hardware'
	| 'Electrical Supplies'
	| 'Concrete and Masonry'
	| 'Painting Supplies'
	| 'Plumbing Materials'
	| 'Construction Tools'
	| 'Adhesives'

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

export type RGB = {
	r: number
	g: number
	b: number
}

export type CartItem = {
	product: Product
	quantity: number
}

export type Cart = CartItem[]

export type Order = {
	id: string
	cart: Cart
	createdAt: Date
	updatedAt: Date
}

export type ApplyProductFilterArgs = {
	products: Product[]
	categoryId: Category['id']
}

export type AddOrderArgs = Pick<Order, 'cart'>
export type NanoidArgs = {
	size?: number
	prefix?: string
}
