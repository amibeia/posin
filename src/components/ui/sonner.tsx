'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

import { useDevices } from '@/hooks/use-devices'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()
	const { isLargeDevice } = useDevices()

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			position={isLargeDevice ? 'bottom-right' : 'top-center'}
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton:
						'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton:
						'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
				},
			}}
			{...props}
		/>
	)
}

export { Toaster }
