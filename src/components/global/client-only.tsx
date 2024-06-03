'use client'

import { useIsClient } from '@uidotdev/usehooks'
import React from 'react'

interface ClientOnlyProps {
	children: React.ReactNode
}

export default function ClientOnly({ children }: ClientOnlyProps) {
	const isClient = useIsClient()

	return isClient ? children : null
}
