import { Skeleton } from '@/components/ui/skeleton'

export default function OrderFiltersDrawerSkeleton() {
	return (
		<div className="flex h-9 items-center justify-center gap-2 px-4 py-2">
			<Skeleton className="size-4 shrink-0 rounded-full" />
			<Skeleton className="h-5 w-[40.44px] shrink-0 rounded-full" />
		</div>
	)
}
