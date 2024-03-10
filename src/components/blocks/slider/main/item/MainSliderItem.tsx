import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../MainSlider.module.scss'
import MainSliderCards from './cards/MainSliderCards'
import type { IMainSliderItem } from './interface/main-slider-item.interface'

const MainSliderItem: FC<IMainSliderItem> = ({
	number,
	isBeginning,
	isEnd,
	prev,
	next,
}) => {
	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<StaticImage
					className={styles.background}
					width={0}
					height={0}
					sizes="100vw"
					src="/images/other/slider/slider-bg.png"
					alt="Slider"
				/>
				<h2 className={styles.heading}>
					Студия аэродизайна
					<span>Ирины Майстровой</span>
				</h2>
				<div className={styles.box}>
					<h3 className={styles.text}>ТЕМАТИЧЕСКИЙ ТЕКСТ СЛАЙДА</h3>
					<div className={styles.fill}>
						<span className={styles.number}>
							0<span>{number}</span>
						</span>
						<div className={styles.actions}>
							<button
								className={styles.prev}
								onClick={prev}
								disabled={isBeginning}
							>
								<StaticImage
									src="/images/icons/arrow-left.png"
									width={50}
									height={50}
									alt="Arrow left"
								/>
							</button>
							<button className={styles.next} onClick={next} disabled={isEnd}>
								<StaticImage
									src="/images/icons/arrow-right.png"
									width={50}
									height={50}
									alt="Arrow left"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<MainSliderCards />
			</div>
		</div>
	)
}

export default MainSliderItem
