'use client'

import { ClipboardList, LucideIcon, Store } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import CartDrawer from '@/components/cart/cart-drawer'
import AddProductDrawer from '@/components/product/add-product-drawer'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

interface MobileNavProps extends React.ComponentPropsWithoutRef<'nav'> {}

const links: { href: string; icon: LucideIcon }[] = [
	{ href: '/', icon: Store },
	{ href: '/orders', icon: ClipboardList },
]

export default function MobileNav({ className, ...props }: MobileNavProps) {
	const pathname = usePathname()

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
							'shrink-0',
							!isSelectedLink && 'hover:bg-accent/80',
						)}
					>
						<Icon className="size-4 shrink-0" />
					</Link>
				)
			})}
			<Separator orientation="vertical" className="mx-1 h-6" />
			<AddProductDrawer />
			<CartDrawer />
		</nav>
	)
}
