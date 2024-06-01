'use client'

import Product from '@/components/blocks/products/item/Product'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import { useFavoritesStore } from '@/store/favorites-store'
import type { FC } from 'react'
import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { favorites } = useFavoritesStore()

	return (
		<Section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>Избранное</h1>
					<div className={styles.list}>
						{favorites.map((product) => (
							<Product
								key={product.id}
								className={styles.item}
								product={product}
								place="public"
							/>
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Favorites
