import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'

import { cn } from '@/lib/utils'

interface OrderCardListSkeletonProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function OrderCardListSkeleton(
	props: OrderCardListSkeletonProps,
) {
	const size = 10

	return (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{Array.from({ length: size }, (_, index) => index + 1).map(
					(id, index) => (
						<Skeleton
							key={id}
							className={cn(
								'flex h-[400px] rounded-xl border border-input shadow-sm',
								index === size - 1 && 'mb-[65px]',
							)}
						/>
					),
				)}
			</section>
		</ScrollArea>
	)
}
