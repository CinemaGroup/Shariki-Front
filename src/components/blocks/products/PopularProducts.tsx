'use client'

import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import Section from '@/components/ui/common/section/Section'
import { useProducts } from '@/hooks/public/product/useProducts'
import type { FC } from 'react'
import styles from './Products.module.scss'
import Product from './item/Product'

const PopularProducts: FC = () => {
	const { products, count } = useProducts(true)
	if (count === 0) return null

	return (
		<Section className={styles.section}>
			<Heading className={styles.mobileHeading}>ПОПУЛЯРНЫЕ ТОВАРЫ</Heading>
			<Container variant="lg">
				<div className={styles.products}>
					<Heading className={styles.heading}>Популярные товары</Heading>
					<div className={styles.list}>
						{products.map((product) => (
							<Product key={product.id} product={product} place="public" />
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default PopularProducts
