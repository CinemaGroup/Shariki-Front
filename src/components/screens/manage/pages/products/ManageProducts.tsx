'use client'

import Product from '@/components/blocks/products/item/Product'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageProducts } from '@/hooks/manage/products/useManageProducts'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageProducts.module.scss'

const ManageProducts: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'products', place: 'manage' })
	const {
		data,
		createProduct,
		deleteProduct,
		toggleProduct,
		duplicateProduct,
	} = useManageProducts(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Продукты</h1>
					<button
						className={globalStyles.create}
						onClick={() => createProduct()}
					>
						<ListPlus />
						Создать Продукт
					</button>
				</div>
				<Filters
					variant="products"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.products && data.products.products.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.products}>
							{data.products.products.map((product) => (
								<Product
									key={product.id}
									className={styles.product}
									product={product}
									variant="none"
									place="admin"
									deleteHandler={() =>
										deleteProduct({
											variables: {
												id: product.id,
											},
										})
									}
									toggleHandler={() =>
										toggleProduct({
											variables: {
												id: product.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateProduct({
											variables: {
												id: product.id,
											},
										})
									}
								/>
							))}
						</div>
						{/* <Pagination
							changePage={(page) => updateQueryFilters('page', page.toString())}
							currentPage={+queryParams.page}
							numberPages={data.serials.length / +queryParams.perPage}
						/> */}
					</div>
				)}
			</div>
		</div>
	)
}

export default ManageProducts
