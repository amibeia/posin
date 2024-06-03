'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'

import { Category } from '@/lib/types'
import { getCategoryIcon, lightenColor } from '@/lib/utils'

interface CategoryBadge {
	name: Category['name']
	color: Category['color']
	total: number
}

export default function CategoryBadge({ name, color, total }: CategoryBadge) {
	const [isHovered, setIsHovered] = useState(false)

	const Icon = getCategoryIcon(name)

	return (
		<Badge
			style={{
				backgroundColor: isHovered
					? lightenColor(color, 30)
					: lightenColor(color, 50),
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Icon className="mr-2 size-4 shrink-0" />
			<span>{total}</span>
		</Badge>
	)
}
