'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Breadcrumb from '@/components/ui/elements/breadcrumb/Breadcrumb'
import Loader from '@/components/ui/elements/loader/Loader'
import CatalogFilters from '@/components/ui/templates/catalog/filters/CatalogFilters'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useCatalog } from '@/hooks/public/catalog/useCatalog'
import { IMenuItem } from '@/shared/interfaces/menu/menu.interface'
import type { TypeParamSlug } from '@/shared/types/param/param.type'
import type { TypeProductDisplay } from '@/shared/types/product/product.type'
import { getParentCategories } from '@/utils/helpers/get-parent-category'
import { useState, type FC } from 'react'
import styles from './Catalog.module.scss'
import CatalogCategories from './categories/CatalogCategories'
import CatalogDisplay from './display/CatalogDisplay'
import CatalogProducts from './products/CatalogProducts'
import CatalogSort from './sort/CatalogSort'

const Catalog: FC<TypeParamSlug> = ({ slug }) => {
	const {
		categories,
		filters,
		products,
		productsCount,
		productsQuery,
		setProductsQuery,
		error,
		loading,
	} = useCatalog(slug)
	const [display, setDisplay] = useState<TypeProductDisplay>('card')

	if (error) return null

	let breadcrumbItems: IMenuItem[] = []
	if (categories[0]) {
		const parentCategories = getParentCategories(categories[0], 5)

		breadcrumbItems = parentCategories.map((category, index) => ({
			label: category.name,
			href: PUBLIC_PAGES.CATEGORY(category.slug),
		}))

		breadcrumbItems.length === 0 &&
			breadcrumbItems.push({
				label: 'Каталог',
				href: PUBLIC_PAGES.CATALOG,
			})
	}

	return (
		<Section className={styles.catalog}>
			<Breadcrumb items={breadcrumbItems} />
			<Container className={styles.container} variant="extra">
				<div className={styles.wrapper}>
					<CatalogFilters
						filters={filters}
						productsQuery={productsQuery}
						setProductsQuery={setProductsQuery}
						className={styles.filters}
					/>
					<div className={styles.right}>
						{categories.length > 0 && (
							<CatalogCategories categories={categories} />
						)}
						<div className={styles.fill}>
							{loading ? (
								<Loader />
							) : (
								products.length > 0 && (
									<>
										<div className={styles.sorting}>
											<CatalogSort
												productsQuery={productsQuery}
												setProductsQuery={setProductsQuery}
											/>
											<CatalogDisplay
												display={display}
												setDisplay={setDisplay}
												setProductsQuery={setProductsQuery}
											/>
										</div>
										<CatalogProducts
											display={display}
											products={products}
											productsCount={productsCount}
											page={+productsQuery.page}
											perPage={+productsQuery.perPage}
											setProductsQuery={setProductsQuery}
										/>
									</>
								)
							)}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Catalog
