import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import ClientOnly from '@/components/global/client-only'
import MobileNav from '@/components/global/mobile-nav'
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
				<MobileNav className="fixed inset-x-0 bottom-4 z-10" />
				<ClientOnly>
					<Toaster />
				</ClientOnly>
			</body>
		</html>
	)
}
