import { getServerActionSession } from '@/libs/iron.session.lib'
import { NextResponse } from 'next/server'

export async function GET() {
	const session = await getServerActionSession()

	if (session?.user) {
		return NextResponse.json({ user: session.user })
	}

	return NextResponse.json(null)
}
