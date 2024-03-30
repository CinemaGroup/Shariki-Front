import type { IProductProps } from '../../../interface/products.interface'

export interface IProductInfo extends IProductProps {
	price: number
	oldPrice?: number
}
