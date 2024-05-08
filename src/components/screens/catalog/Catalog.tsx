'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Breadcrumb from '@/components/ui/elements/breadcrumb/Breadcrumb'
import Loader from '@/components/ui/elements/loader/Loader'
import CatalogFilters from '@/components/ui/templates/catalog/filters/CatalogFilters'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useCatalog } from '@/hooks/public/catalog/useCatalog'
import type { IMenuItem } from '@/shared/interfaces/menu/menu.interface'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import type { TypeParamSlug } from '@/shared/types/param/param.type'
import type { TypeProductDisplay } from '@/shared/types/product/product.type'
import { getBreadcrumbCategories } from '@/utils/helpers/get-breadcrumb-categories'
import { useState, type FC } from 'react'
import styles from './Catalog.module.scss'
import CatalogCategories from './categories/CatalogCategories'
import CatalogDisplay from './display/CatalogDisplay'
import CatalogProducts from './products/CatalogProducts'
import CatalogSort from './sort/CatalogSort'

const Catalog: FC<TypeParamSlug & IPageSearchParam> = ({
	slug,
	searchParams,
}) => {
	const {
		rootCategory,
		categories,
		filters,
		products,
		productsCount,
		productsQuery,
		setProductsQuery,
		error,
		loading,
	} = useCatalog(searchParams, slug)
	const [display, setDisplay] = useState<TypeProductDisplay>('card')

	if (error) return null

	let breadcrumbItems: IMenuItem[] = []
	if (rootCategory && slug) {
		const parentCategories = getBreadcrumbCategories(rootCategory)
		console.log('Parent Categories: ', parentCategories)

		breadcrumbItems = parentCategories.map((category, index) => ({
			label: category.name,
			href: PUBLIC_PAGES.CATEGORY(category.slug),
		}))
	}

	if (breadcrumbItems.length === 0) {
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
					{productsCount > 0 && (
						<CatalogFilters
							filters={filters}
							productsQuery={productsQuery}
							setProductsQuery={setProductsQuery}
							className={styles.filters}
						/>
					)}
					<div className={styles.right}>
						{categories.length > 0 && (
							<CatalogCategories categories={categories} />
						)}
						{loading ? (
							<Loader />
						) : (
							productsCount > 0 && (
								<div className={styles.fill}>
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
								</div>
							)
						)}
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Catalog