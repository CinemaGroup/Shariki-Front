import {
	ProductsDocument,
	Sort,
	Status,
	type ProductsQuery,
	type ProductsQueryVariables,
} from '@/__generated__/output'
import { serverApolloClient } from '@/api/apollo/apollo.client'

export const useProducts = async (isSale: boolean) => {
	return serverApolloClient
		.query<ProductsQuery, ProductsQueryVariables>({
			fetchPolicy: 'no-cache',
			query: ProductsDocument,
			variables: {
				query: {
					sort: !isSale ? Sort.Newest : Sort.Oldest,
					status: Status.Published,
				},
				isSale: isSale,
			},
		})
		.then(({ data }) => ({ products: data }))
}
