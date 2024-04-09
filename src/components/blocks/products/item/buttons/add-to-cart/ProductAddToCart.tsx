'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import { useCartStore } from '@/store/cart-store'
import cn from 'clsx'
import { Trash2 } from 'lucide-react'
import type { FC } from 'react'
import styles from '../../../Products.module.scss'
import type { IProductProps } from '../../../interface/products.interface'
import type { IAddToCart } from './interface/add-to-cart.interface'

const ProductAddToCart: FC<IProductProps & IClassName & IAddToCart> = ({
	product,
	className,
	icon,
}) => {
	const { toggle, isExists } = useCartStore()

	return (
		<button
			className={cn(
				styles.addToCart,
				{
					[styles.removeFromCart]: isExists(product.id),
				},
				className && className
			)}
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
						src={icon.src}
						width={icon.width}
						height={icon.height}
						alt={icon.alt}
					/>
					В КОРЗИНУ
				</>
			)}
		</button>
	)
}

export default ProductAddToCart
