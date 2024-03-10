import { EnumCookies } from '@/constants/enum.constants'
import { IS_PRODUCTION } from '@/constants/global.constants'
import Cookies from 'js-cookie'

export class CookieService {
	static getAccessToken() {
		return Cookies.get(EnumCookies.ACCESS_TOKEN)
	}

	static setAccessToken(token: string | null) {
		return Cookies.set(EnumCookies.ACCESS_TOKEN, token || '', {
			domain: process.env.DOMAIN,
			expires: 1 / 24,
			secure: IS_PRODUCTION,
		})
	}

	static removeSession() {
		return Cookies.remove(EnumCookies.SESSION)
	}

	static removeAccessToken() {
		return Cookies.remove(EnumCookies.ACCESS_TOKEN)
	}
}
