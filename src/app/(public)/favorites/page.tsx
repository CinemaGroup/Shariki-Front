import type { Metadata } from 'next'

import Favorites from '@/components/screens/favorites/Favorites'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function FavoritesPage() {
	return <Favorites />
}
