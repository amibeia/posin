import { clsx, type ClassValue } from 'clsx'
import {
	Bolt,
	Brush,
	Droplet,
	Hammer,
	HardHat,
	Layers,
	LucideIcon,
	Package,
	Zap,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { ApplyProductFilterArgs, Category, RGB } from '@/lib/types'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function rupiah(value: number) {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	})
		.format(value)
		.slice(0, -3)
}

export function getCategoryIcon(category: Category['name']): LucideIcon {
	switch (category) {
		case 'Flooring Materials':
			return Layers
		case 'Fasteners and Hardware':
			return Bolt
		case 'Electrical Supplies':
			return Zap
		case 'Concrete and Masonry':
			return HardHat
		case 'Painting Supplies':
			return Brush
		case 'Plumbing Materials':
			return Droplet
		case 'Adhesives':
			return Package
		case 'Construction Tools':
			return Hammer
	}
}

function convert3To6DigitsHex(hex: string): string {
	return (
		'#' +
		hex
			.slice(1)
			.split('')
			.map((value) => value + value)
			.join('')
	)
}

function extractRgbFromHex(hex: string): RGB {
	const removedHashHex = hex.slice(1)

	const r = parseInt(removedHashHex.slice(0, 2), 16)
	const g = parseInt(removedHashHex.slice(2, 4), 16)
	const b = parseInt(removedHashHex.slice(4, 6), 16)

	return { r, g, b }
}

function lightenHex(value: number, percent: number): number {
	return Math.min(255, Math.floor(value + (255 - value) * (percent / 100)))
}

function formatHexValue(value: number): string {
	return value.toString(16).padStart(2, '0')
}

export function lightenColor(hex: string, percent: number): string {
	const formattedHex = hex.length === 3 ? convert3To6DigitsHex(hex) : hex
	const { r, g, b } = extractRgbFromHex(formattedHex)

	return `#${formatHexValue(lightenHex(r, percent))}${formatHexValue(lightenHex(g, percent))}${formatHexValue(lightenHex(b, percent))}`
}

export function applyProductFilter({
	products,
	categoryId,
}: ApplyProductFilterArgs) {
	let filteredProducts = [...products]

	if (categoryId) {
		filteredProducts = filteredProducts.filter(
			(product) => product.categoryId === categoryId,
		)
	}

	return filteredProducts
}
