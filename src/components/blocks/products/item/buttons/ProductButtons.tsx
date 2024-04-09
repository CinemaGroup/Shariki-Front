import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
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
				<Link href={`product/${product.slug}`} className={styles.link}>
					<StaticImage
						src="/images/icons/eye.png"
						width={20}
						height={20}
						alt="Eye"
					/>
				</Link>
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
