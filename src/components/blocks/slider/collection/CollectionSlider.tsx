'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import type { FC } from 'react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './CollectionSlider.module.scss'
import CollectionSliderItem from './item/CollectionSliderItem'

const CollectionSlider: FC = () => {
	const { setSwiper, setBeginning, setEnd, beginning, end, prev, next } =
		useSwiper()

	return (
		<div className={styles.slider}>
			<div className={styles.title}>
				<StaticImage
					src="/images/other/slider/collection-title.png"
					width={30}
					height={30}
					alt="ТОВАРЫ К ПРАЗДНИКАМ"
				/>
				ТОВАРЫ К ПРАЗДНИКАМ
			</div>
			<div className={styles.fill}>
				<Swiper
					className={styles.swiper}
					modules={[Pagination]}
					spaceBetween={0}
					slidesPerView={4}
					slidesPerGroup={4}
					pagination={{
						clickable: true,
						bulletClass: styles.bullet,
						bulletActiveClass: styles.bulletActive,
						el: '#collectionBullets',
						type: 'bullets',
					}}
					speed={800}
					onSwiper={(swiper) => setSwiper(swiper)}
					onSlideChange={({ isBeginning, isEnd }) => {
						setBeginning(isBeginning)
						setEnd(isEnd)
					}}
					direction="vertical"
				>
					<div className={styles.actions}>
						<button className={styles.prev} onClick={prev} disabled={beginning}>
							<span>вверх</span>
							<StaticImage
								src="/images/icons/arrow-up.png"
								width={25}
								height={53}
								alt="Arrow left"
							/>
						</button>
						<button className={styles.next} onClick={next} disabled={end}>
							<span>вниз</span>
							<StaticImage
								src="/images/icons/arrow-down.png"
								width={25}
								height={53}
								alt="Arrow left"
							/>
						</button>
					</div>
					{Array.from({ length: 8 }).map((_, index) => (
						<SwiperSlide key={index} className={styles.sliderItem}>
							<CollectionSliderItem />
						</SwiperSlide>
					))}
				</Swiper>
				<div id="collectionBullets" className={styles.dots}></div>
			</div>
		</div>
	)
}

export default CollectionSlider
