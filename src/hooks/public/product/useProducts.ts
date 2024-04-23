import { Sort, Status, useProductsQuery } from '@/__generated__/output'

export const useProducts = (isSale: boolean) => {
	const { data } = useProductsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: !isSale ? Sort.Newest : Sort.Oldest,
				status: Status.Published,
				perPage: '10',
				page: '1'
			},
			isSale: isSale,
		},
	})

	return { data }
}
