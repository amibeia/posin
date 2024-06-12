import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'

import { cn } from '@/lib/utils'

interface CategoryCardListSkeletonProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function CategoryCardListSkeleton(
	props: CategoryCardListSkeletonProps,
) {
	const size = 8

	return (
		<ScrollArea {...props}>
			<section className="flex items-center gap-2">
				{Array.from({ length: size }, (_, index) => index + 1).map(
					(id, index) => (
						<Skeleton
							key={id}
							className={cn(
								'flex h-[82px] w-[200px] rounded-xl border border-input shadow-sm',
								index === 0 && 'ml-4',
								index === size - 1 && 'mr-4',
							)}
						/>
					),
				)}
			</section>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	)
}
