import Product from '@/components/blocks/products/item/Product'
import ProductTable from '@/components/blocks/products/table/ProductTable'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import type { ICatalogProducts } from '@/shared/interfaces/catalog/catalog.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../Catalog.module.scss'

const CatalogProducts: FC<ICatalogProducts> = ({
	display,
	products,
	productsCount,
	page,
	perPage,
	setPagination
}) => {
	return (
		<div className={styles.products}>
			<div
				className={cn(styles.list, {
					[styles.tables]: display === 'table',
					[styles.cards]: display === 'card',
				})}
			>
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
			{productsCount > perPage && (
				<Pagination
					length={productsCount}
					page={+page}
					perPage={+perPage}
					setPagination={setPagination}
					className={styles.pagination}
				/>
			)}
		</div>
	)
}

export default CatalogProducts
