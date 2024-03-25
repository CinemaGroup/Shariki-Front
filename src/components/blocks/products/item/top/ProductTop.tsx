import StaticImage from '@/components/ui/common/image/StaticImage'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductPropsWithVariant } from '../../interface/products.interface'

const ProductTop: FC<IProductPropsWithVariant> = ({ product, variant }) => {
	return (
		<div className={styles.top}>
			{product.types.length > 0 && (
				<div className={styles.types}>
					{product.types.map((type, index) => (
						<div className={styles.type} key={index}>
							<StaticImage
								className="w-auto h-auto"
								src={type.iconPath}
								width={0}
								height={0}
								sizes="100vw"
								alt="Type"
							/>
						</div>
					))}
				</div>
			)}
			{variant !== 'none' && (
				<span
					className={cn(styles.variant, {
						[styles.green]: variant === 'newest',
						[styles.red]: variant === 'sale',
					})}
				>
					{variant === 'sale' ? 'Акция' : 'Новинка'}
				</span>
			)}
		</div>
	)
}

export default ProductTop
