import { Skeleton } from '@/components/ui/skeleton'

export default function OrderTypeSwitchSkeleton() {
	return (
		<div className="flex items-center gap-2">
			<Skeleton className="size-4 rounded-full" />
			<Skeleton className="h-5 w-9 rounded-full" />
			<Skeleton className="size-4 rounded-full" />
		</div>
	)
}
