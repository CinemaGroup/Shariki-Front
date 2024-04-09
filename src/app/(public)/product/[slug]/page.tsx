import NotFoundPage from '@/app/not-found'
import ProductSingle from '@/components/screens/product/ProductSingle'
import type { IPageSlugParam } from '@/shared/interfaces/param/param.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default function ProductPage({ params }: IPageSlugParam) {
	if (!params.slug) return <NotFoundPage />

	return <ProductSingle slug={params.slug} />
}
