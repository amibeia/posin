import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'

interface ProductCardListSkeletonProps
	extends React.ComponentPropsWithoutRef<typeof ScrollArea> {}

export default function ProductCardListSkeleton(
	props: ProductCardListSkeletonProps,
) {
	return (
		<ScrollArea {...props}>
			<section className="flex flex-col gap-2">
				{Array.from({ length: 40 }, (_, index) => index + 1).map((id) => (
					<Skeleton
						key={id}
						className="flex h-[54px] rounded-xl border border-input shadow-sm"
					/>
				))}
			</section>
		</ScrollArea>
	)
}
