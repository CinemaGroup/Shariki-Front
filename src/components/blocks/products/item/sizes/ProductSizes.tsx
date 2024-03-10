'use client'

import cn from 'clsx'
import { useState, type FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductSizes: FC<IProductProps> = ({ product }) => {
	if (product.sizes.length === 0) return null

	const [size, setSize] = useState(product.sizes[0].size)

	return (
		<ul className={styles.sizes}>
			{product.sizes.map((item, index) => (
				<li className={styles.size} key={index}>
					<button
						className={cn(styles.sizeBtn, {
							[styles.picked]: size === item.size,
						})}
						onClick={() => setSize(item.size)}
					>
						{item.size}
					</button>
				</li>
			))}
		</ul>
	)
}

export default ProductSizes
