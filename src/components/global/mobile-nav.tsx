import { CirclePlus, ClipboardList, Home } from 'lucide-react'

import { Button } from '@/components/ui/button'
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
			<Button variant="ghost" size="icon" className="hover:bg-accent/80">
				<Home className="size-4 shrink-0" />
			</Button>
			<Button variant="ghost" size="icon" className="hover:bg-accent/80">
				<CirclePlus className="size-4 shrink-0" />
			</Button>
			<Button variant="ghost" size="icon" className="hover:bg-accent/80">
				<ClipboardList className="size-4 shrink-0" />
			</Button>
		</nav>
	)
}
