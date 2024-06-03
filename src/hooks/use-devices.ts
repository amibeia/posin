'use client'

import { useMediaQuery } from '@uidotdev/usehooks'

export function useDevices() {
	const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)')

	const isMediumDevice = useMediaQuery(
		'only screen and (min-width : 768px) and (max-width : 1023px)',
	)

	const isLargeDevice = useMediaQuery('only screen and (min-width : 1024px)')

	return { isSmallDevice, isMediumDevice, isLargeDevice }
}
