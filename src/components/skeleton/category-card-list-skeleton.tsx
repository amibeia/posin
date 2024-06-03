import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'

interface CategoryCardListSkeletonProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function CategoryCardListSkeleton(
	props: CategoryCardListSkeletonProps,
) {
	return (
		<ScrollArea {...props}>
			<section className="flex items-center gap-2">
				{Array.from({ length: 8 }, (_, index) => index + 1).map((id) => (
					<Skeleton
						key={id}
						className="flex h-[82px] w-[200px] rounded-xl border border-input shadow-sm"
					/>
				))}
			</section>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	)
}
