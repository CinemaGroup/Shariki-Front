import StaticImage from '@/components/ui/common/image/StaticImage'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../../MainSlider.module.scss'
import { MAIN_SLIDER_CARDS_DATA } from './data/main-slider-cards.data'

const MainSliderCards: FC = () => {
	return (
		<ul className={styles.cards}>
			{MAIN_SLIDER_CARDS_DATA.items.map((card, index) => (
				<li className={styles.card} key={index}>
					<div className={styles.cardInner}>
						<div className={styles.cardInfo}>
							<h4 className={styles.cardName}>{card.name}</h4>
							<Link href={card.href} className={styles.cardLink}>
								Подробнее
							</Link>
						</div>
					</div>
					<StaticImage
						className={styles.cardImage}
						src={`/images/data/slider/cards/card-${index + 1}.png`}
						width={0}
						height={0}
						sizes="100vw"
						alt={card.name}
					/>
				</li>
			))}
		</ul>
	)
}

export default MainSliderCards
