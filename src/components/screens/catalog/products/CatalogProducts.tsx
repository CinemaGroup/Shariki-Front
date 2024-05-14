import Product from '@/components/blocks/products/item/Product'
import ProductTable from '@/components/blocks/products/table/ProductTable'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import type { ICatalogProducts } from '@/shared/interfaces/catalog/catalog.interface'
import type { FC } from 'react'
import styles from '../Catalog.module.scss'
import cn from 'clsx'

const CatalogProducts: FC<ICatalogProducts> = ({
	display,
	products,
	productsCount,
	page,
	perPage,
	setProductsQuery,
}) => {
	return (
		<div className={styles.products}>
			<div className={cn(styles.list, {
				[styles.tables]: display === 'table',
				[styles.cards]: display === 'card'
			})}>
				{products.map((product) =>
					display === 'card' ? (
						<Product
							className={styles.product}
							key={product.id}
							product={product}
							place="public"
						/>
					) : (
						<ProductTable
							className={styles.product}
							key={product.id}
							product={product}
						/>
					)
				)}
			</div>
			{true && (
				<Pagination
					length={productsCount}
					page={+page}
					perPage={+perPage}
					setProductsQuery={setProductsQuery}
					className={styles.pagination}
				/>
			)}
		</div>
	)
}

export default CatalogProducts
