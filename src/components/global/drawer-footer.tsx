'use client'

import { ArrowDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DrawerClose } from '@/components/ui/drawer'

import { cn } from '@/lib/utils'

interface DrawerFooterProps extends React.ComponentPropsWithoutRef<'section'> {}

export default function DrawerFooter({
	children,
	className,
	...props
}: DrawerFooterProps) {
	return (
		<section
			className={cn(
				'mt-auto flex items-center justify-between gap-4 p-4',
				className,
			)}
			{...props}
		>
			<DrawerClose asChild>
				<Button
					variant="outline"
					size="icon"
					className="size-10 shrink-0 rounded-full"
				>
					<ArrowDown className="size-4 shrink-0" />
				</Button>
			</DrawerClose>
			{children}
		</section>
	)
}
