'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { TypeColor } from '@/shared/types/color/color.type'
import Link from 'next/link'
import type { FC } from 'react'
import 'swiper/css'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductImages: FC<IProductProps & TypeColor> = ({ product, color }) => {
	const images = color?.images || product.images

	return (
		<div className={styles.slider}>
			<Link href={PUBLIC_PAGES.PRODUCT(product.slug)}>
				<StaticImage
					src={images[0]}
					width={200}
					height={200}
					alt={product.name}
				/>
			</Link>
		</div>
	)
}

export default ProductImages
