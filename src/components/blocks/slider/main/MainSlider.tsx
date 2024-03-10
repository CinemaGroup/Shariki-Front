'use client'

import SearchField from '@/components/ui/common/form/search-field/SearchField'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import Link from 'next/link'
import { type FC } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './MainSlider.module.scss'
import MainSliderItem from './item/MainSliderItem'

const MainSlider: FC = () => {
	const { setSwiper, setBeginning, setEnd, beginning, end, prev, next } =
		useSwiper()

	return (
		<div className={styles.slider}>
			<SearchField className={styles.search} />
			<Swiper
				className={styles.swiper}
				modules={[Pagination, EffectFade]}
				effect="fade"
				speed={800}
				pagination={{
					clickable: true,
					clickableClass: styles.pagination,
					bulletClass: styles.bullet,
					bulletActiveClass: styles.bulletActive,
				}}
				onSwiper={(swiper) => setSwiper(swiper)}
				onSlideChange={({ isBeginning, isEnd }) => {
					setBeginning(isBeginning)
					setEnd(isEnd)
				}}
			>
				{Array.from({ length: 4 }).map((_, index) => (
					<SwiperSlide key={index} className={styles.sliderItem}>
						<MainSliderItem
							number={index + 1}
							isBeginning={beginning}
							isEnd={end}
							prev={prev}
							next={next}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Link className={styles.catalog} href="/catalog">
				<span className={styles.catalogIcon}>
					<span></span>
					<span></span>
					<span></span>
				</span>
				<span>КАТАЛОГ ТОВАРОВ</span>
			</Link>
		</div>
	)
}

export default MainSlider
