import type { TagsQuery } from '@/__generated__/output'
import type { FC } from 'react'
import styles from './Tags.module.scss'
import Tag from './item/Tag'

const Tags: FC<{ tags: TagsQuery['tags'] }> = ({ tags }) => {
	return (
		<div className={styles.tags}>
			<ul className={styles.list}>
				{tags.map((tag, index) => (
					<Tag key={index} tag={tag} place="public" />
				))}
			</ul>
		</div>
	)
}

export default Tags
