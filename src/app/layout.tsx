import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

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
			</body>
		</html>
	)
}
