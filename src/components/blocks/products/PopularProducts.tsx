'use client'

import Heading from '@/components/ui/common/heading/Heading'
import type { FC } from 'react'
import styles from './Products.module.scss'
import Product from './item/Product'
import { useProducts } from '@/hooks/public/product/useProducts'

const PopularProducts: FC = () => {
	const { data } = useProducts(true)
	if (!data || data.products.count === 0) return null

	return (
		<div className={styles.products}>
			<Heading className={styles.heading}>Популярные товары</Heading>
			<div className={styles.list}>
				{data.products.products.map((product) => (
					<Product key={product.id} product={product} place="public" />
				))}
			</div>
		</div>
	)
}

export default PopularProducts
