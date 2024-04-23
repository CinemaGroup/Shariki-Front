import { Sort, Status, useCatalogQuery } from '@/__generated__/output'
import type { ICatalogFiltersArguments } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import { useState } from 'react'

export const useCatalog = (categorySlug?: string) => {
	const [productsQuery, setProductsQuery] = useState<ICatalogFiltersArguments>({
		page: '1',
		perPage: '18',
		sort: Sort.Newest,
		status: Status.Published,
		types: [],
		sizes: [],
		colors: [],
		hues: [],
		manufacturers: [],
		materials: [],
		collections: [],
		holidays: [],
		countries: [],
	})

	const { data, error, loading } = useCatalogQuery({
		fetchPolicy: 'no-cache',
		variables: {
			data: {
				categorySlug,
				categoryInput: {
					sort: Sort.Newest,
					status: Status.Published,
					...(!categorySlug ? { isParents: true } : {}),
				},
				productInput: productsQuery,
			},
		},
	})

	return {
		categories: data?.catalog.categories || [],
		filters: data?.catalog.filters || null,
		products: data?.catalog.products || [],
		productsCount: data?.catalog.productsCount || 0,
		productsQuery,
		setProductsQuery,
		error,
		loading,
	}
}
