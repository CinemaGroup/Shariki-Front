import Heading from '@/components/ui/common/heading/Heading'
import { TypeProduct } from '@/shared/types/product/product.type'
import type { FC } from 'react'
import styles from './Products.module.scss'
import type { IProductVariant } from './interface/products.interface'
import Product from './item/Product'

const Products: FC<IProductVariant & { products: TypeProduct[] }> = ({
	variant,
	products,
}) => {
	return (
		<div className={styles.products}>
			<Heading className={styles.heading}>
				{variant === 'newest' ? 'Новые поступления' : 'Акционные товары'}
			</Heading>
			<div className={styles.list}>
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						variant={variant}
						place="public"
					/>
				))}
			</div>
		</div>
	)
}

export default Products
