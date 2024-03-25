import { Sort } from '@/__generated__/output'
import type { IFilters } from '@/shared/interfaces/filter/filter.interface'
import type { TypeQueryFilters } from '@/shared/types/filter/filter.type'
import { useState } from 'react'
import { useSearchFilter } from './useSearchFilter'

export const useFilters = ({ variant, place }: IFilters) => {
	const { searchTerm, debounceSearch, handleSearch } = useSearchFilter()

	const [queryParams, setQueryParams] = useState<TypeQueryFilters>({
		// page: '1',
		// perPage: '20',
		status: null,
		searchTerm,
		sort: Sort.Newest,
	})

	const updateQueryFilters = (key: string, value: string | null) => {
		setQueryParams((prevParams) => ({ ...prevParams, [key]: value }))
	}

	return {
		updateQueryFilters,
		handleSearch,
		queryParams,
		searchTerm,
		debounceSearch,
	}
}
