import cn from 'clsx'
import type { FC } from 'react'
import styles from './Block.module.scss'
import type { IBlock } from './interface/block.interface'

const Block: FC<IBlock> = ({ block, error, className }) => {
	if (!block || !block.heading || !block.content || error) return null

	return (
		<div className={cn(styles.block, className && className)}>
			<h2 className={styles.heading}>{block.heading}</h2>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: block.content }}
			/>
		</div>
	)
}

export default Block
