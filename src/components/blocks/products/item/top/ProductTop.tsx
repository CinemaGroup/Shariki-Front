import StaticImage from '@/components/ui/common/image/StaticImage'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductPropsWithVariant } from '../../interface/products.interface'

const ProductTop: FC<IProductPropsWithVariant> = ({ product, variant }) => {
	return (
		<div className={styles.top}>
			<div className={styles.type}>
				<StaticImage
									className='w-auto h-auto'
					src={product.type.iconPath}
					width={0}
					height={0}
					sizes="100vw"
					alt={product.type.name}
				/>
			</div>
			<span
				className={cn(styles.variant, {
					[styles.green]: variant === 'newest',
					[styles.red]: variant === 'sale',
				})}
			>
				{variant === 'sale' ? 'Акция' : 'Новинка'}
			</span>
		</div>
	)
}

export default ProductTop
