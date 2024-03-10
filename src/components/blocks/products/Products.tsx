import Heading from '@/components/ui/common/heading/Heading'
import type { FC } from 'react'
import styles from './Products.module.scss'
import { PRODUCTS_NEWEST_DATA, PRODUCTS_SALE_DATA } from './data/products.data'
import type { IProductVariant } from './interface/products.interface'
import Product from './item/Product'

const Products: FC<IProductVariant> = ({ variant }) => {
	return (
		<div className={styles.products}>
			<Heading className={styles.heading}>
				{variant === 'newest' ? 'Новые поступления' : 'Акционные товары'}
			</Heading>
			<div className={styles.list}>
				{variant === 'sale'
					? PRODUCTS_SALE_DATA.map((product, index) => (
							<Product key={index} product={product} variant={variant} />
					  ))
					: PRODUCTS_NEWEST_DATA.map((product, index) => (
							<Product key={index} product={product} variant={variant} />
					  ))}
			</div>
		</div>
	)
}

export default Products
