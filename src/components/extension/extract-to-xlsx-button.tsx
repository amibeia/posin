'use client'

import { Download } from 'lucide-react'
import * as xlsx from 'xlsx'

import { Button } from '@/components/ui/button'

import { generateWorkSheet } from '@/lib/utils'
import { useCategories } from '@/store/category'
import { useOrders, useStocks } from '@/store/order'
import { useProducts } from '@/store/product'

export default function ExtractToXLSXButton() {
	const categories = useCategories()
	const products = useProducts()
	const orders = useOrders()
	const stocks = useStocks()

	const handleClick = () => {
		const workbook = xlsx.utils.book_new()

		const productWorkSheet = generateWorkSheet({
			json: products.map((product) => ({
				...product,
				categoryId: categories.find(
					(category) => category.id === product.categoryId,
				)!.name,
			})),
			options: { header: ['ID', 'Name', 'Price', 'Category'] },
		})

		const orderWorkSheet = generateWorkSheet({
			json: orders.map((order) => ({
				...order,
				items: order.items.map((item) => item.product.name).join(', '),
			})),
			options: {
				header: [
					'ID',
					'Items',
					'Has Shipped',
					'Transportation Method',
					'Payment Method',
					'Created At',
					'Updated At',
				],
			},
		})

		const stockWorkSheet = generateWorkSheet({
			json: stocks.map((stock) => ({
				...stock,
				categoryId: categories.find(
					(category) => category.id === stock.categoryId,
				)!.name,
			})),
			options: { header: ['ID', 'Name', 'Price', 'Category'] },
		})

		xlsx.utils.book_append_sheet(workbook, productWorkSheet, 'Product Sheet')
		xlsx.utils.book_append_sheet(workbook, orderWorkSheet, 'Order Sheet')
		xlsx.utils.book_append_sheet(workbook, stockWorkSheet, 'Stock Sheet')

		xlsx.writeFile(workbook, 'posin.xlsx', { compression: true })
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={handleClick}
			className="group/cart-navigation relative shrink-0 hover:bg-accent/80"
		>
			<Download className="size-4 shrink-0" />
		</Button>
	)
}
