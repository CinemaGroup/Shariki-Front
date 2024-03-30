'use client'

import { useTags } from '@/hooks/public/tag/useTags'
import type { FC } from 'react'
import styles from './Tags.module.scss'
import Tag from './item/Tag'

const Tags: FC = () => {
	const { data } = useTags()
	if (!data || data.tags.length === 0) return null

	return (
		<div className={styles.tags}>
			<ul className={styles.list}>
				{data.tags.map((tag, index) => (
					<Tag key={index} tag={tag} place="public" />
				))}
			</ul>
		</div>
	)
}

export default Tags
