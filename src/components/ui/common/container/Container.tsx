import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'
import type { IContainer } from './interface/container.interface'

const Container: FC<PropsWithChildren<IContainer>> = ({
	children,
	variant = 'md',
	className,
}) => {
	return (
		<div
			className={cn(
				styles.container,
				{
					[styles.lg]: variant === 'lg',
					[styles.md]: variant === 'md',
					[styles.sm]: variant === 'sm',
				},
				className && className
			)}
		>
			{children}
		</div>
	)
}

export default Container
