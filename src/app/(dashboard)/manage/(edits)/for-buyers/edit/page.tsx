import type { Metadata } from 'next'

import ManageForBuyersEdit from '@/components/screens/manage/edits/for-buyers/ManageForBuyersEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageForBuyersEditPage() {
	return <ManageForBuyersEdit />
}
