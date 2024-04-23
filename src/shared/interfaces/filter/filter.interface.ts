import type {
	TypeCatalogFilters,
	TypeQueryFilters,
} from '@/shared/types/filter/filter.type'

export interface IFilters {
	variant: 'default' | 'products'
	place: 'public' | 'manage'
}

export interface IQueryFilters extends IFilters {
	queryParams: TypeQueryFilters
	updateQueryFilters: (key: string, value: string | null) => void
}

export interface ICatalogFiltersActions {
	filters: TypeCatalogFilters
}
