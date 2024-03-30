'use client'

import Heading from '@/components/ui/common/heading/Heading'
import { useProducts } from '@/hooks/public/product/useProducts'
import type { FC } from 'react'
import styles from './Products.module.scss'
import type { IProductVariant } from './interface/products.interface'
import Product from './item/Product'

const Products: FC<IProductVariant> = ({ variant }) => {
	const { data } = useProducts(variant === 'sale' ? true : false)
	if (!data || data.products.length === 0) return null

	return (
		<div className={styles.products}>
			<Heading className={styles.heading}>
				{variant === 'newest' ? 'Новые поступления' : 'Акционные товары'}
			</Heading>
			<div className={styles.list}>
				{data.products.map((product) => (
					<Product
						key={product.id}
						product={product}
						variant={variant}
						place="public"
					/>
				))}
			</div>
		</div>
	)
}

export default Products
