'use client'

import FilledImage from '@/components/ui/common/image/FilledImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import type { TypeColor } from '@/shared/types/color/color.type'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductImages: FC<IProductProps & TypeColor> = ({ product, color }) => {
	const { push } = useRouter()
	
	const { setSwiper, setBeginning, setEnd } = useSwiper()
	const images = color?.images || product.images

	return (
		<div
			className={styles.slider}
			onClick={() => push(PUBLIC_PAGES.PRODUCT(product.slug))}
		>
			<Swiper
				className={styles.images}
				modules={[Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				slidesPerGroup={1}
				grabCursor
				pagination={{
					clickable: true,
					bulletClass: styles.bullet,
					bulletActiveClass: styles.bulletActive,
					el: '#imagesBullets',
					type: 'bullets',
				}}
				speed={400}
				onSwiper={(swiper) => setSwiper(swiper)}
				onSlideChange={({ isBeginning, isEnd }) => {
					setBeginning(isBeginning)
					setEnd(isEnd)
				}}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} className={styles.image}>
						<FilledImage src={image} alt={product.name} />
					</SwiperSlide>
				))}
				<div id="imagesBullets" className={styles.dots}></div>
			</Swiper>
		</div>
	)
}

export default ProductImages
