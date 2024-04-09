import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import { CHARACTERISTIC_TYPES_TRANSLATE } from '@/translates/characteristic-types.translate'
import type { FC } from 'react'
import styles from './ProductSingleAboutCharacteristics.module.scss'

const ProductSingleAboutCharacteristics: FC<ICurrentProduct> = ({
	product,
}) => {
	return (
		<div className={styles.characteristics}>
			<h2 className={styles.title}>Характеристики</h2>
			{product.characteristics.length > 0 && (
				<ul className={styles.list}>
					{product.characteristics.map((item, index) => (
						<li className={styles.item} key={index}>
							<span className={styles.label}>
								{CHARACTERISTIC_TYPES_TRANSLATE[item.type]}:
							</span>
							<span className={styles.value}>{item.name}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default ProductSingleAboutCharacteristics
