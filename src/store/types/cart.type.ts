import type { TypeProduct } from '@/shared/types/product/product.type'

export interface ICartItem extends TypeProduct {
	count: number
}

export type TypeCartStore = {
	cart: ICartItem[]
	toggle: (product: TypeProduct) => void
	isExists: (productId: number) => boolean
	remove: (id: number) => void
	removeAll: () => void
	totalPrice: () => number
	changeQuantity: (productId: number, type: 'minus' | 'plus') => void
	getCartItemCount: (productId: number) => number | null
}
