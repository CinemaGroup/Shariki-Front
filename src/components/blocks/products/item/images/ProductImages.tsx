'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import type { FC } from 'react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductImages: FC<IProductProps> = ({ product }) => {
	const { setSwiper, setBeginning, setEnd } = useSwiper()

	return (
		<div className={styles.slider}>
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
				{product.images.map((image, index) => (
					<SwiperSlide key={index} className={styles.image}>
						<StaticImage
							className="w-auto h-auto"
							src={image}
							width={0}
							height={0}
							sizes="100vw"
							alt={product.name}
						/>
					</SwiperSlide>
				))}
							<div id="imagesBullets" className={styles.dots}></div>
			</Swiper>

		</div>
	)
}

export default ProductImages
