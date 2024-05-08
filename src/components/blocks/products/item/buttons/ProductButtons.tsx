import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'
import ProductAddToCart from './add-to-cart/ProductAddToCart'
import ProductFavorite from './favorite/ProductFavorite'
import ProductQuantity from './quantity/ProductQuantity'

const ProductButtons: FC<IProductProps> = ({ product }) => {
	return (
		<div className={styles.buttons}>
			<ProductQuantity product={product} />
			<div className={styles.actions}>
				<ProductFavorite product={product} />
			</div>
			<ProductAddToCart
				product={product}
				icon={{
					src: '/images/icons/cart.png',
					width: 16,
					height: 16,
					alt: 'Cart',
				}}
			/>
		</div>
	)
}

export default ProductButtons
