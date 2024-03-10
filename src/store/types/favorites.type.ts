import type { TypeProduct } from '@/shared/types/product/product.type'

export type TypeFavoritesStore = {
	favorites: TypeProduct[]
	toggle: (product: TypeProduct) => void
	isExists: (productId: number) => boolean
	remove: (id: number) => void
	removeAll: () => void
}
