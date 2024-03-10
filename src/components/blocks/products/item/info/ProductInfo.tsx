import { formatPrice } from '@/utils/formats/price/format-price.util'
import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductInfo: FC<IProductProps> = ({ product }) => {
	const formattedPrice = parseFloat(formatPrice(product.price)).toFixed(2)
	const formattedOldPrice = parseFloat(
		formatPrice(product.oldPrice ? product.oldPrice : '0')
	).toFixed(2)

	return (
		<div className={styles.info}>
			{product.oldPrice ? (
				<div className={styles.salePriceBox}>
					<div className={styles.newPriceBox}>
						<div className={styles.newPrice}>
							{product.price} ₽
							<span className={styles.salePercent}>
								-
								{((parseFloat(formatPrice(product.oldPrice)) -
									parseFloat(formattedPrice)) /
									parseFloat(formatPrice(product.oldPrice))) *
									100}
								%
							</span>
						</div>
						<span className={styles.piecePrice}>
							{(parseFloat(formattedPrice) / product.packageQuantity).toFixed(
								2
							).replace('.', ',')}{' '}
							₽ за шт
						</span>
					</div>
					<div className={styles.oldPriceBox}>
						<span className={styles.oldPrice}>{product.oldPrice} ₽</span>
						<span className={styles.piecePrice}>
							{(
								parseFloat(formattedOldPrice) / product.packageQuantity
							).toFixed(2).replace('.', ',')}{' '}
							₽ за шт
						</span>
					</div>
				</div>
			) : (
				<div className={styles.currentPriceBox}>
					<span className={styles.price}>{product.price} ₽</span>
					<span className={styles.piecePrice}>
						{(parseFloat(formattedPrice) / product.packageQuantity).toFixed(2).replace('.', ',')}{' '}
						₽ за шт
					</span>
				</div>
			)}
			<h3 className={styles.name}>{product.name}</h3>
		</div>
	)
}

export default ProductInfo
