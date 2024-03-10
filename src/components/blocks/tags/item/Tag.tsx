import StaticImage from '@/components/ui/common/image/StaticImage'
import type { TypeTag } from '@/shared/types/tag/tag.type'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Tags.module.scss'

const Tag: FC<{ tag: TypeTag }> = ({ tag }) => {
	return (
		<li className={styles.item}>
			<Link href={`/tag/${tag.slug}`} className={styles.link}>
				<div className={styles.images}>
					<StaticImage
						className={styles.image}
						src={tag.imagePath}
						width={130}
						height={130}
						alt={tag.name}
					/>
					<StaticImage
						className={styles.balloons}
						src="/images/other/tags/balloons.png"
						width={130}
						height={130}
						alt="Шарики"
					/>
				</div>
				<h3 className={styles.name}>{tag.name}</h3>
			</Link>
		</li>
	)
}

export default Tag
