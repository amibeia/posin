import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import { Order } from '@/lib/types'
import { getOrderTotal, rupiah } from '@/lib/utils'

interface OrderTableProps extends React.ComponentPropsWithoutRef<typeof Table> {
	order: Order
}

export default function OrderTable({ order, ...props }: OrderTableProps) {
	const total = getOrderTotal(order.items)

	return (
		<Table {...props}>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[30px] text-center">Qty</TableHead>
					<TableHead>Item</TableHead>
					<TableHead className="w-[110px] text-right">Price</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{order.items.map((item) => (
					<TableRow key={item.product.id}>
						<TableCell className="w-[30px] text-center">
							{item.quantity}
						</TableCell>
						<TableCell>{item.product.name}</TableCell>
						<TableCell className="w-[120px] text-right font-semibold">
							{rupiah(item.product.price)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={2}>Total</TableCell>
					<TableCell className="text-right font-bold">
						{rupiah(total)}
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	)
}
