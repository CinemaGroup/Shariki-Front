import NotFoundPage from '@/app/not-found'
import PostSingle from '@/components/screens/post/PostSingle'
import type { IPageSlugParam } from '@/shared/interfaces/param/param.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default function PostPage({ params }: IPageSlugParam) {
	if (!params.slug) return <NotFoundPage />

	return <PostSingle slug={params.slug} />
}
