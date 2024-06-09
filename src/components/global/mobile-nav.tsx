'use client'

import { ClipboardList, LucideIcon, Monitor, Store } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import CartDrawer from '@/components/cart/cart-drawer'
import AddProductDrawer from '@/components/product/add-product-drawer'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'
import { useStocks } from '@/store/order'

interface MobileNavProps extends React.ComponentPropsWithoutRef<'nav'> {}

export default function MobileNav({ className, ...props }: MobileNavProps) {
	const stocks = useStocks()
	const pathname = usePathname()

	const totalItems = stocks.length

	const links: {
		href: string
		icon: LucideIcon
		notification?: React.ReactNode
	}[] = [
		{ href: '/', icon: Store },
		{ href: '/orders', icon: ClipboardList },
		{
			href: '/stock-monitor',
			icon: Monitor,
			notification: totalItems !== 0 && (
				<span className="absolute right-0.5 top-0.5 z-20 flex size-4 shrink-0 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground group-hover/cart-navigation:bg-destructive/90">
					{totalItems}
				</span>
			),
		},
	]

	return (
		<nav
			className={cn(
				'mx-auto flex w-fit items-center justify-center gap-2 rounded-xl border border-input bg-background/20 p-2 shadow-sm backdrop-blur-sm',
				className,
			)}
			{...props}
		>
			{links.map((link) => {
				const isSelectedLink = link.href === pathname
				const Icon = link.icon

				return (
					<Link
						key={link.href}
						href={link.href}
						className={cn(
							buttonVariants({
								variant: isSelectedLink ? 'default' : 'ghost',
								size: 'icon',
							}),
							'relative shrink-0',
							!isSelectedLink && 'hover:bg-accent/80',
						)}
					>
						<Icon className="size-4 shrink-0" />
						{link.notification}
					</Link>
				)
			})}
			<Separator orientation="vertical" className="mx-1 h-6" />
			<AddProductDrawer />
			<CartDrawer />
		</nav>
	)
}
