import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { TypeSize } from '@/shared/types/size/size.type'
import type { FC } from 'react'
import styles from './ProductSingleContentPrice.module.scss'

const ProductSingleContentPrice: FC<ICurrentProduct & TypeSize> = ({
	product,
	size,
}) => {
	const item = size ? size : product

	return item.oldPrice ? (
		<div className={styles.salePriceBox}>
			<div className={styles.newPriceBox}>
				<div className={styles.newPrice}>
					{item.price} ₽
					<span className={styles.salePercent}>
						-{Math.round(100 - (100 * item.price) / item.oldPrice)} %
					</span>
				</div>
				<span className={styles.piecePrice}>
					{(item.price / product.packageQuantity).toFixed(2)} ₽ за шт
				</span>
			</div>
			<div className={styles.oldPriceBox}>
				<span className={styles.oldPrice}>{item.oldPrice} ₽</span>
				<span className={styles.piecePrice}>
					{(item.oldPrice / product.packageQuantity).toFixed(2)} ₽ за шт
				</span>
			</div>
		</div>
	) : (
		<div className={styles.currentPriceBox}>
			<span className={styles.price}>{item.price} ₽</span>
			<span className={styles.piecePrice}>
				{(item.price / product.packageQuantity).toFixed(2)} ₽ за шт
			</span>
		</div>
	)
}

export default ProductSingleContentPrice
