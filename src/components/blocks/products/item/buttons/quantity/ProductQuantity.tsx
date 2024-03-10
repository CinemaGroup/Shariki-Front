'use client'

import { Minus, Plus } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from '../../../Products.module.scss'
import type { IProductProps } from '../../../interface/products.interface'

const ProductQuantity: FC<IProductProps> = ({ product }) => {
	// const { changeQuantity, getCartItemCount } = useCartStore()
	// const count = getCartItemCount(product.id)
	const [quantity, setQuantity] = useState(1)

	return (
		<div className={styles.quantity}>
			<button
				className={styles.quantityBtn}
				onClick={() => setQuantity(quantity - 1)}
				disabled={quantity === 1}
			>
				<Minus />
			</button>
			<span className={styles.quantityCount}>{quantity}</span>
			<button
				className={styles.quantityBtn}
				onClick={() => setQuantity(quantity + 1)}
			>
				<Plus />
			</button>
		</div>
	)
}

export default ProductQuantity
