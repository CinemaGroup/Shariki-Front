import { useReviewsQuery, type QueryInput } from '@/__generated__/output'

export const useReviews = (query: QueryInput) => {
	const { data } = useReviewsQuery({
		variables: {
			query,
		},
	})

	return {
		data,
	}
}
