import type { ICatalogFiltersArguments } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import type { Dispatch, SetStateAction } from 'react'

export interface IPagination {
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
	length: number
	perPage: number
	page: number
}
