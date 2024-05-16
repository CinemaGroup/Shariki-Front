'use client'

import Heading from '@/components/ui/common/heading/Heading'
import { useProducts } from '@/hooks/public/product/useProducts'
import type { FC } from 'react'
import styles from './Products.module.scss'
import Product from './item/Product'

const PopularProducts: FC = () => {
	const { products, count } = useProducts(true)
	if (count === 0) return null

	return (
		<div className={styles.products}>
			<Heading className={styles.heading}>Популярные товары</Heading>
			<div className={styles.list}>
				{products.map((product) => (
					<Product key={product.id} product={product} place="public" />
				))}
			</div>
		</div>
	)
}

export default PopularProducts
