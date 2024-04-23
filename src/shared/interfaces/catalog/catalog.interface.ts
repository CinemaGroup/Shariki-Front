import type { ICatalogFiltersArguments } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import type { TypeCatalogProducts } from '@/shared/types/catalog/catalog.type'
import type { TypeProductDisplay } from '@/shared/types/product/product.type'
import type { Dispatch, SetStateAction } from 'react'

export interface ICatalogProducts {
	display: TypeProductDisplay
	products: TypeCatalogProducts
	productsCount: number
	page: number
	perPage: number
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
}
