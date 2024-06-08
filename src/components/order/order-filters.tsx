import OrderShippingTypeFilter from '@/components/order/order-shipping-type-filter'
import OrderStatusFilter from '@/components/order/order-status-filter'
import PaymentMethodFilter from '@/components/order/payment-method-filter'
import TransportationMethodFilter from '@/components/order/transportation-method-filter'
import { Label } from '@/components/ui/label'

export default function OrderFilters() {
	return (
		<section className="flex flex-1 flex-col gap-4 p-4">
			<div className="flex items-center justify-between">
				<Label>Order Status</Label>
				<OrderStatusFilter />
			</div>
			<div className="flex items-center justify-between">
				<Label>Payment Method</Label>
				<PaymentMethodFilter />
			</div>
			<div className="flex items-center justify-between">
				<Label>Order Shipping Type</Label>
				<OrderShippingTypeFilter />
			</div>
			<div className="flex items-center justify-between">
				<Label>Transportation Method</Label>
				<TransportationMethodFilter />
			</div>
		</section>
	)
}
