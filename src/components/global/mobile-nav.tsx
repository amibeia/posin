import { ClipboardList, Store } from 'lucide-react'
import Link from 'next/link'

import CartDrawer from '@/components/cart/cart-drawer'
import AddProductDrawer from '@/components/product/add-product-drawer'
import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

interface MobileNavProps extends React.ComponentPropsWithoutRef<'nav'> {}

export default function MobileNav({ className, ...props }: MobileNavProps) {
	return (
		<nav
			className={cn(
				'mx-auto flex w-fit items-center justify-center gap-2 rounded-xl border border-input bg-background/20 p-2 shadow-sm backdrop-blur-sm',
				className,
			)}
			{...props}
		>
			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
					'shrink-0 hover:bg-accent/80',
				)}
			>
				<Store className="size-4 shrink-0" />
			</Link>
			<AddProductDrawer />
			<CartDrawer />
			<Link
				href="/orders"
				className={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
					'shrink-0 hover:bg-accent/80',
				)}
			>
				<ClipboardList className="size-4 shrink-0" />
			</Link>
		</nav>
	)
}
