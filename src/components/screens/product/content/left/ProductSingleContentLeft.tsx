import StaticImage from '@/components/ui/common/image/StaticImage'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { TypeColor } from '@/shared/types/color/color.type'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../ProductSingleContent.module.scss'
import type { IProductSingleContentLeft } from './interface/product-single-content-left.interface'

const ProductSingleContentLeft: FC<
	ICurrentProduct & TypeColor & IProductSingleContentLeft
> = ({ product, color, currentIndex, goTo }) => {
	return (
		<div className={styles.left}>
			{product.oldPrice ? (
				<div className={styles.sale}>АКЦИЯ</div>
			) : (
				<div className={styles.newest}>НОВИНКА</div>
			)}
			{product.iconPath && (
				<StaticImage
					className={styles.icon}
					src={product.iconPath}
					width={95}
					height={95}
					alt={product.name}
				/>
			)}
			<div className={styles.heading}>
				<span className={styles.sku}>Артикул: {product.sku}</span>
				<h1 className={styles.name}>{product.name}</h1>
			</div>
			{color && (
				<div className={styles.thumbs}>
					{color.images.map((image, index) => (
						<button
							key={index}
							className={cn(styles.thumb, {
								[styles.active]: index === currentIndex,
							})}
							onClick={() => goTo(index)}
						>
							<StaticImage
								src={image}
								width={115}
								height={200}
								alt={product.name}
							/>
							<span className={styles.thumbLine}></span>
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default ProductSingleContentLeft
