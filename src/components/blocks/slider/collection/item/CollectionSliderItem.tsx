import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../CollectionSlider.module.scss'

const CollectionSliderItem: FC = () => {
	return (
		<div className={styles.item}>
			<div className={styles.card}>
				<StaticImage
					className={styles.leftBalloon}
					src="/images/other/slider/balloon-left.png"
					width={84}
					height={101}
					alt="Balloon"
				/>
				<StaticImage
					className={styles.rightBalloon}
					src="/images/other/slider/balloon-right.png"
					width={57}
					height={125}
					alt="Balloon"
				/>
				<StaticImage
					className={styles.tree}
					src="/images/other/slider/tree.png"
					width={68}
					height={101}
					alt="Tree"
				/>
				<StaticImage
					className={styles.decor}
					src="/images/other/slider/decor.png"
					width={154}
					height={36}
					alt="Decor"
				/>
				<span className={styles.name}>Новый год</span>
			</div>
			<Link className={styles.link} href="/catalog">
				В каталог
				<span>
					<StaticImage
						src="/images/icons/chevron-right.png"
						width={11}
						height={11}
						alt="Arrow"
					/>
				</span>
			</Link>
		</div>
	)
}

export default CollectionSliderItem
