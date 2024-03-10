'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { useFavoritesStore } from '@/store/favorites-store'
import type { FC } from 'react'
import styles from '../../../Products.module.scss'
import type { IProductProps } from '../../../interface/products.interface'

const ProductFavorite: FC<IProductProps> = ({ product }) => {
	const { toggle } = useFavoritesStore()

	return (
		<button className={styles.favorite} onClick={() => toggle(product)}>
			<StaticImage
				src="/images/icons/heart.png"
				width={21}
				height={21}
				alt="Heart"
			/>
		</button>
	)
}

export default ProductFavorite
