import {
	Sort,
	Status,
	TagsDocument,
	TagsQuery,
	TagsQueryVariables,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo.client'

export const useTags = async () => {
	const { data } = await apolloClient().query<TagsQuery, TagsQueryVariables>({
		query: TagsDocument,
		variables: {
			query: {
				sort: Sort.Oldest,
				status: Status.Hidden,
			},
		},
	})

	return { data }
}
