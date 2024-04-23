import type { ICatalogFiltersArguments } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import type { Dispatch, SetStateAction } from 'react'

export const usePagination = (
	page: number,
	length: number,
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
) => {
	const goToPreviousPage = () => {
		if (page > 1) {
			const previousPage = (page - 1).toString()
			setProductsQuery((prev) => ({
				...prev,
				page: previousPage,
			}))
		}
	}

	const goToNextPage = () => {
		if (page < length) {
			const nextPage = (page + 1).toString()
			setProductsQuery((prev) => ({
				...prev,
				page: nextPage,
			}))
		}
	}

	const goToPage = (pageNumber: number) => {
		setProductsQuery((prev) => ({
			...prev,
			page: pageNumber.toString(),
		}))
	}

	return { goToPreviousPage, goToNextPage, goToPage }
}
