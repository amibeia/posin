import { forwardRef } from 'react'

import { Button, ButtonProps } from '@/components/ui/button'

import { PaymentMethodOption, TransportationMethodOption } from '@/lib/types'
import { cn } from '@/lib/utils'

interface OptionProps extends ButtonProps {
	option: PaymentMethodOption | TransportationMethodOption
}

const Option = forwardRef<HTMLButtonElement, OptionProps>(
	({ option, className, ...props }, ref) => {
		const Icon = option.icon

		return (
			<div className="flex flex-col items-center justify-center gap-1">
				<Button
					ref={ref}
					size="sm"
					className={cn('w-full', className)}
					{...props}
				>
					<Icon className="size-4 shrink-0" />
				</Button>
				<span className="text-xs">{option.label}</span>
			</div>
		)
	},
)
Option.displayName = 'Option'

export default Option
