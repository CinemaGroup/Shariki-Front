import { PageType } from '@/__generated__/output'
import Catalog from '@/components/screens/catalog/Catalog'
import { useSeo } from '@/hooks/public/seo/useSeo'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'

export async function generateMetadata() {
	const { seo, error } = await useSeo(PageType.Catalog)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default function CatalogPage({ searchParams }: IPageSearchParam) {
	return <Catalog searchParams={searchParams} />
}
