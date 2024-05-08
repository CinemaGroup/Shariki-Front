import type { Metadata } from 'next'

import ManageShippingAndPaymentEdit from '@/components/screens/manage/edits/shipping-and-payment/ManageShippingAndPaymentEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageShippingAndPaymentEditPage() {
	return <ManageShippingAndPaymentEdit />
}
