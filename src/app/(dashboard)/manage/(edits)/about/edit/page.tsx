import type { Metadata } from 'next'

import ManageAboutEdit from '@/components/screens/manage/edits/about/ManageAboutEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageAboutEditPage() {
	return <ManageAboutEdit />
}
