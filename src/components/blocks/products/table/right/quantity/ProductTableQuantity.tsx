'use client'

import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import cn from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from '../../ProductTable.module.scss'
import type { IProductProps } from '../../../interface/products.interface'

const ProductTableQuantity: FC<IProductProps & IClassName> = ({
	product,
	className,
}) => {
	// const { changeQuantity, getCartItemCount } = useCartStore()
	// const count = getCartItemCount(product.id)
	const [quantity, setQuantity] = useState(1)

	return (
		<div className={cn(styles.quantity, className && className)}>
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

export default ProductTableQuantity
