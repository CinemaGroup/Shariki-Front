import ProductAddToCart from '@/components/blocks/products/item/buttons/add-to-cart/ProductAddToCart'
import ProductQuantity from '@/components/blocks/products/item/buttons/quantity/ProductQuantity'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { FC } from 'react'
import styles from './ProductSingleContentButtons.module.scss'

const ProductSingleContentButtons: FC<ICurrentProduct> = ({ product }) => {
	return (
		<div className={styles.buttons}>
			<ProductQuantity product={product} className={styles.quantity} />
			<ProductAddToCart
				product={product}
				className={styles.cart}
				icon={{
					src: '/images/icons/cart-big.png',
					width: 35,
					height: 35,
					alt: 'Cart',
				}}
			/>
		</div>
	)
}

export default ProductSingleContentButtons
