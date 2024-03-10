import type { TypeProduct } from '@/shared/types/product/product.type'

export interface IProductVariant {
	variant: 'sale' | 'newest'
}

export interface IProductPropsWithVariant extends IProductVariant {
	product: TypeProduct
}

export interface IProductProps {
	product: TypeProduct
}
