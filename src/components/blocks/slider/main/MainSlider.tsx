'use client'

import SearchField from '@/components/ui/common/form/search-field/SearchField'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import { useState, type FC } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './MainSlider.module.scss'
import { MAIN_SLIDER_DATA } from './data/main-slider.data'
import MainSliderItem from './item/MainSliderItem'

const MainSlider: FC = () => {
	const { setSwiper, setBeginning, setEnd, beginning, end, prev, next } =
		useSwiper()
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.slider}>
			<SearchField
				className={styles.search}
				searchTerm={searchTerm}
				handleSearch={(e) => setSearchTerm(e.target.value)}
			/>
			<Swiper
				className={styles.swiper}
				modules={[Pagination]}
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
				{MAIN_SLIDER_DATA.items.map((item, index) => (
					<SwiperSlide key={index} className={styles.sliderItem}>
						<MainSliderItem
							number={index + 1}
							isBeginning={beginning}
							isEnd={end}
							prev={prev}
							next={next}
							item={item}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MainSlider
