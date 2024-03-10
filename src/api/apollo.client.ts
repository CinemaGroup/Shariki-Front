import { AuthResponse, GetNewTokensDocument } from '@/__generated__/output'
import {
	GRAPHQL_SERVER_URL,
	IS_CLIENT,
	IS_DEVELOPMENT,
} from '@/constants/global.constants'
import { setServerSession } from '@/server/auth/get-server-session'
import { AuthService } from '@/services/auth/auth.service'
import { CookieService } from '@/services/cookie/cookie.service'
import { useSetAuth } from '@/store/store'
import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
	Observable,
	split,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import { getMainDefinition } from '@apollo/client/utilities'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { GraphQLError } from 'graphql'

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
	if (graphQLErrors) {
		for (const { extensions, message } of graphQLErrors) {
			if (extensions.code === 'UNAUTHENTICATED') {
				if (operation.operationName === 'GetNewTokens') return
				if (message === 'Refresh token not passed') {
					AuthService.removeUser()
					return
				}

				return new Observable((observer) => {
					;(async () => {
						try {
							const response = await clientApolloClient.mutate<{
								newTokens: AuthResponse
							}>({
								mutation: GetNewTokensDocument,
							})

							const accessToken = response.data?.newTokens.accessToken
							const user = response.data?.newTokens.user

							if (accessToken && user) {
								CookieService.setAccessToken(accessToken)
								useSetAuth(user)
								setServerSession(user)

								observer.complete()
								return
							}

							AuthService.removeUser()
							observer.error(new GraphQLError('Empty AccessToken')) // Генерируем ошибку
						} catch (err) {
							AuthService.removeUser()
							observer.error(err)
						}
					})()
				})
			}
		}
	}
	if (networkError) console.log(`[Network error]: ${networkError}`)
})

const removeTypenameLink = removeTypenameFromVariables()
const removeTypenameFromCache = { addTypename: false }

const authLink = setContext((_, { headers }) => {
	const accessToken = IS_CLIENT ? CookieService.getAccessToken() : ''

	return {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	}
})

const uploadLink = createUploadLink({
	uri: GRAPHQL_SERVER_URL,
	headers: {
		'apollo-require-preflight': 'true',
	},
})

const httpLink = new HttpLink({
	uri: GRAPHQL_SERVER_URL,
	credentials: 'include',
})

const clientApolloClient = new ApolloClient({
	link: split(
		(operation) => {
			const definition = getMainDefinition(operation.query)
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'mutation' &&
				definition.selectionSet.selections.some(
					(field: any) => field.name.value === 'uploadFiles'
				)
			)
		},
		ApolloLink.from([
			removeTypenameLink,
			errorLink,
			authLink,
			uploadLink as any,
		]),
		ApolloLink.from([removeTypenameLink, errorLink, authLink, httpLink])
	),
	cache: new InMemoryCache(removeTypenameFromCache),
	connectToDevTools: IS_DEVELOPMENT,
})

export const serverApolloClient = new ApolloClient({
	link: split(
		(operation) => {
			const definition = getMainDefinition(operation.query)
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'mutation' &&
				definition.selectionSet.selections.some(
					(field: any) => field.name.value === 'uploadFiles'
				)
			)
		},
		ApolloLink.from([removeTypenameLink, uploadLink as any]),
		ApolloLink.from([removeTypenameLink, httpLink])
	),
	cache: new InMemoryCache(removeTypenameFromCache),
	ssrMode: true,
})

export function apolloClient() {
	return IS_CLIENT ? clientApolloClient : serverApolloClient
}
