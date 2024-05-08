'use client'

import { Sort, Status } from '@/__generated__/output'
import Heading from '@/components/ui/common/heading/Heading'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { usePosts } from '@/hooks/public/post/usePosts'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Posts.module.scss'
import Post from './item/Post'

const Posts: FC = () => {
	const { posts } = usePosts({
		sort: Sort.Newest,
		status: Status.Published,
		perPage: '10',
		page: '1',
	})

	return (
		<div className={styles.posts}>
			<Heading className={styles.heading}>Новости и статьи</Heading>
			<div className={styles.list}>
				{posts.map((post, index) => (
					<Post key={index} post={post} place="public" />
				))}
			</div>
			<Link href={PUBLIC_PAGES.POSTS} className={styles.more}>
				ВСЕ СТАТЬИ
			</Link>
		</div>
	)
}

export default Posts
