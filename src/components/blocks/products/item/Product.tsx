import type { FC } from 'react'
import styles from '../Products.module.scss'
import ProductColors from './colors/ProductColors'
import ProductImages from './images/ProductImages'
import ProductInfo from './info/ProductInfo'
import ProductSizes from './sizes/ProductSizes'
import ProductTop from './top/ProductTop'
import type { IProductPropsWithVariant } from '../interface/products.interface'
import ProductButtons from './buttons/ProductButtons'

const Product: FC<IProductPropsWithVariant> = ({ product, variant }) => {
	return (
		<div className={styles.item}>
			<ProductTop variant={variant} product={product} />
			<ProductImages product={product} />
			<ProductInfo product={product} />
			<ProductSizes product={product} />
			<ProductColors product={product} />
			<ProductButtons product={product} />
		</div>
	)
}

export default Product
