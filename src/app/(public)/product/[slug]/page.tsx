import NotFoundPage from '@/app/not-found'
import ProductSingle from '@/components/screens/product/ProductSingle'
import { useProductSeo } from '@/hooks/public/seo/useProductSeo'
import type { IPageSlugParam } from '@/shared/interfaces/param/param.interface'

export async function generateMetadata({ params }: IPageSlugParam) {
	const { seo, error } = await useProductSeo(params.slug)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default function ProductPage({ params }: IPageSlugParam) {
	if (!params.slug) return <NotFoundPage />

	return <ProductSingle slug={params.slug} />
}
