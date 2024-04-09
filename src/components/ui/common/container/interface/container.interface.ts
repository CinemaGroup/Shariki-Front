import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'

export interface IContainer extends IClassName {
	variant?: 'lg' | 'md' | 'sm' | 'smallest'
}
