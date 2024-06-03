import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import ClientOnly from '@/components/global/client-only'
import { Toaster } from '@/components/ui/sonner'

import { cn } from '@/lib/utils'
import './globals.css'

export const metadata: Metadata = {
	title: 'Posin',
	description: '',
}

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={cn(
					'bg-background font-sans text-foreground antialiased',
					fontSans.variable,
				)}
			>
				{children}
				<ClientOnly>
					<Toaster />
				</ClientOnly>
			</body>
		</html>
	)
}
