import Catalog from '@/components/screens/catalog/Catalog'
import type {
	IPageSearchParam,
	IPageSlugParam,
} from '@/shared/interfaces/param/param.interface'

export default function CategoryPage({
	searchParams,
	params,
}: IPageSearchParam & IPageSlugParam) {
	return <Catalog searchParams={searchParams} slug={params.slug} />
}
