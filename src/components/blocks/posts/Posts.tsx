import Heading from '@/components/ui/common/heading/Heading'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Posts.module.scss'
import { POSTS_DATA } from './data/posts.data'
import Post from './item/Post'

const Posts: FC = () => {
	return (
		<div className={styles.posts}>
			<Heading className={styles.heading}>Новости и статьи</Heading>
			<ul className={styles.list}>
				{POSTS_DATA.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</ul>
			<Link href="/posts" className={styles.more}>
				ВСЕ СТАТЬИ
			</Link>
		</div>
	)
}

export default Posts
