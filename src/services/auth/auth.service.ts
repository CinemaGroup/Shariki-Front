import {
	GetNewTokensDocument,
	GetNewTokensMutation,
} from '@/__generated__/output'
import { CONTENT_TYPE } from '@/api/api.helpers'
import { GRAPHQL_SERVER_URL } from '@/constants/global.constants'
import { setServerSession } from '@/server/auth/get-server-session'
import { useSetAuth } from '@/store/store'
import { CookieService } from '../cookie/cookie.service'

export const AuthService = {
	async getNewTokens(refreshToken?: string) {
		const query = GetNewTokensDocument.loc?.source.body

		return fetch(GRAPHQL_SERVER_URL, {
			method: 'POST',
			headers: {
				...CONTENT_TYPE,
				RefreshToken: refreshToken || '',
			},
			body: JSON.stringify({ query }),
		})
			.then((response) => response.json())
			.then(({ data }) => {
				return (data as GetNewTokensMutation).newTokens
			})
			.catch((error) => {
				throw error
			})
	},

	async removeUser() {
		useSetAuth(null)
		CookieService.removeAccessToken()
		CookieService.removeSession()
		setServerSession(null)
	},
}
