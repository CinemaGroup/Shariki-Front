'use client'

import cn from 'clsx'
import { useState, type FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductColors: FC<IProductProps> = ({ product }) => {
	if (product.colors.length === 0) return null

	const [color, setColor] = useState(product.colors[0].color)

	return (
		<ul className={styles.colors}>
			{product.colors.map((item, index) => (
				<li className={styles.color} key={index}>
					<button
						className={cn(styles.colorBtn, {
							[styles.picked]: color === item.color,
						})}
						onClick={() => setColor(item.color)}
					>
						<span style={{ backgroundColor: item.color }}></span>
					</button>
				</li>
			))}
		</ul>
	)
}

export default ProductColors
