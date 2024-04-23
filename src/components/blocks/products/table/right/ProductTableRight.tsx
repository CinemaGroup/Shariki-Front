import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import type { IProductProps } from '../../interface/products.interface'
import styles from '../ProductTable.module.scss'
import ProductTableAddToCart from './add-to-cart/ProductTableAddToCart'
import ProductTableFavorite from './favorite/ProductTableFavorite'
import ProductTableQuantity from './quantity/ProductTableQuantity'

const ProductTableRight: FC<IProductProps> = ({ product }) => {
	return (
		<div className={styles.buttons}>
			<Link href={`product/${product.slug}`} className={styles.link}>
				<StaticImage
					src="/images/icons/eye.png"
					width={20}
					height={20}
					alt="Eye"
				/>
			</Link>
			<ProductTableFavorite product={product} />
			<ProductTableQuantity product={product} />
			<ProductTableAddToCart
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

export default ProductTableRight
