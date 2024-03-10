'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { useCartStore } from '@/store/cart-store'
import cn from 'clsx'
import { Trash2 } from 'lucide-react'
import type { FC } from 'react'
import styles from '../../../Products.module.scss'
import type { IProductProps } from '../../../interface/products.interface'

const ProductAddToCart: FC<IProductProps> = ({ product }) => {
	const { toggle, isExists } = useCartStore()

	return (
		<button
			className={cn(styles.addToCart, {
				[styles.removeFromCart]: isExists(product.id),
			})}
			onClick={() => toggle(product)}
		>
			{isExists(product.id) ? (
				<>
					<Trash2 size={16} />
					УДАЛИТЬ
				</>
			) : (
				<>
					<StaticImage
						src="/images/icons/cart.png"
						width={16}
						height={16}
						alt="Cart"
					/>
					В КОРЗИНУ
				</>
			)}
		</button>
	)
}

export default ProductAddToCart
