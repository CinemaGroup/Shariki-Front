import FilledImage from '@/components/ui/common/image/FilledImage'
import type { TypePost } from '@/shared/types/post/post.type'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Posts.module.scss'

const Post: FC<{ post: TypePost }> = ({ post }) => {
	return (
		<li className={styles.item}>
			<div className={styles.preview}>
				<FilledImage src={post.poster} alt={post.name} />
			</div>
			<div className={styles.info}>
				<ul className={styles.terms}>
					<li className={styles.rubric}>{post.rubrics[0].name}</li>
					<li className={styles.date}>{post.createdAt}</li>
				</ul>
				<h3 className={styles.name}>{post.name}</h3>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: post.description }}
				/>
				<Link href={`/post/${post.slug}`} className={styles.link}>
					Подробнее
				</Link>
			</div>
		</li>
	)
}

export default Post
