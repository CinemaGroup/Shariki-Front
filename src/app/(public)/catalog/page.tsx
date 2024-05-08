import Catalog from '@/components/screens/catalog/Catalog'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default function CatalogPage({ searchParams }: IPageSearchParam) {
	return <Catalog searchParams={searchParams} />
}
