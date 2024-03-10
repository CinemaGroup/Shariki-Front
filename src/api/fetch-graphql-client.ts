import { GRAPHQL_SERVER_URL } from '@/constants/global.constants'
import { CONTENT_TYPE } from './api.helpers'

class GraphQLClient {
	private url: string
	private defaultHeaders: Record<string, string>

	constructor(url: string, defaultHeaders: Record<string, string> = {}) {
		this.url = url
		this.defaultHeaders = defaultHeaders
	}

	async query<T>(
		query?: string,
		variables?: Record<string, any>,
		headers?: Record<string, string>
	): Promise<T> {
		return this.fetch({ query, variables }, headers)
	}

	private async fetch(
		body: Record<string, any>,
		headers?: Record<string, string>
	): Promise<any> {
		try {
			const response = await fetch(this.url, {
				method: 'POST',
				headers: {
					...CONTENT_TYPE,
					...this.defaultHeaders,
					...headers,
				},
				body: JSON.stringify(body),
			})

			const data = await response.json()

			if (data.errors) {
				console.log('GraphQL errors: ', data.errors)
				throw new Error('GraphQL errors: ' + JSON.stringify(data.errors))
			} else {
				return data.data
			}
		} catch (error) {
			console.error('Fetch error: ', error)
			throw error
		}
	}
}

export const fetchGraphql = new GraphQLClient(GRAPHQL_SERVER_URL)
