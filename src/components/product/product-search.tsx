'use client'

import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ProductSearch() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const query = searchParams.get('query') || ''

	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		const urlSearchParams = new URLSearchParams(searchParams)

		value
			? urlSearchParams.set('query', value)
			: urlSearchParams.delete('query')

		router.replace(`${pathname}?${urlSearchParams.toString()}`)
	}

	return (
		<div className="relative">
			<Label htmlFor="product-search" className="absolute left-2.5 top-2.5">
				<Search className="size-4 shrink-0 text-muted-foreground" />
			</Label>
			<Input
				id="product-search"
				type="search"
				autoComplete="off"
				placeholder="Search by product name"
				className="max-w-[300px] pl-8"
				defaultValue={query}
				onChange={handleChange}
			/>
		</div>
	)
}
