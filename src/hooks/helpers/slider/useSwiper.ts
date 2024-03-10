import { useState } from 'react'
import { useSwiper as useSwiperSlider } from 'swiper/react'

export const useSwiper = () => {
	const [swiper, setSwiper] = useState(useSwiperSlider())
	const [beginning, setBeginning] = useState(true)
	const [end, setEnd] = useState(false)

	const next = () => {
		swiper.slideNext()
	}

	const prev = () => {
		swiper.slidePrev()
	}

	return {
		swiper,
		setSwiper,
		beginning,
		setBeginning,
		end,
		setEnd,
		prev,
		next,
	}
}
