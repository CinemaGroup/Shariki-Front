'use server'

import type { User } from '@/__generated__/output'
import { getServerActionSession } from '@/libs/iron.session.lib'

export async function getServerSession() {
	const { user } = await getServerActionSession()

	return user
}

export const setServerSession = async (user: User | null) => {
	const session = await getServerActionSession()
	session.user = user
	await session.save()
}
