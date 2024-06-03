import { CirclePlus, ClipboardList, Home } from 'lucide-react'

import CartDrawer from '@/components/cart/cart-drawer'
import { Button, buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import Link from 'next/link'

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
				<Home className="size-4 shrink-0" />
			</Link>
			<Button
				variant="ghost"
				size="icon"
				className="shrink-0 hover:bg-accent/80"
			>
				<CirclePlus className="size-4 shrink-0" />
			</Button>
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
