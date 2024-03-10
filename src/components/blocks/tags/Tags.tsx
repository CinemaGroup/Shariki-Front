import type { FC } from 'react'
import styles from './Tags.module.scss'
import { TAGS_DATA } from './data/tags.data'
import Tag from './item/Tag'

const Tags: FC = () => {
	// const { data } = await useTags()
	// if (data.tags.length === 0) return null

	return (
		<div className={styles.tags}>
			<ul className={styles.list}>
				{TAGS_DATA.map((tag, index) => (
					<Tag key={index} tag={tag} />
				))}
			</ul>
		</div>
	)
}

export default Tags
