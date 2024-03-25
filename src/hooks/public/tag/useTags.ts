import {
	Sort,
	Status,
	TagsDocument,
	type TagsQuery,
	type TagsQueryVariables,
} from '@/__generated__/output'
import { serverApolloClient } from '@/api/apollo/apollo.client'

export const useTags = async () => {
	return serverApolloClient
		.query<TagsQuery, TagsQueryVariables>({
			query: TagsDocument,
			fetchPolicy: 'no-cache',
			variables: {
				query: {
					sort: Sort.Oldest,
					status: Status.Published,
				},
			},
		})
		.then(({ data }) => ({ tags: data }))
}
