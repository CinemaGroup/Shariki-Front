import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductInfo } from './interface/product-info.interface'

const ProductInfo: FC<IProductInfo> = ({ product, price, oldPrice }) => {
	return (
		<div className={styles.info}>
			{oldPrice ? (
				<div className={styles.salePriceBox}>
					<div className={styles.newPriceBox}>
						<div className={styles.newPrice}>
							{price} ₽
							<span className={styles.salePercent}>
								-{Math.round(100 - (100 * price) / oldPrice)} %
							</span>
						</div>
						<span className={styles.piecePrice}>
							{(price / product.packageQuantity).toFixed(2)} ₽ за шт
						</span>
					</div>
					<div className={styles.oldPriceBox}>
						<span className={styles.oldPrice}>{oldPrice} ₽</span>
						<span className={styles.piecePrice}>
							{(oldPrice / product.packageQuantity).toFixed(2)} ₽ за шт
						</span>
					</div>
				</div>
			) : (
				<div className={styles.currentPriceBox}>
					<span className={styles.price}>{price} ₽</span>
					<span className={styles.piecePrice}>
						{(price / product.packageQuantity).toFixed(2)} ₽ за шт
					</span>
				</div>
			)}
			<h3 className={styles.name}>{product.name}</h3>
		</div>
	)
}

export default ProductInfo
