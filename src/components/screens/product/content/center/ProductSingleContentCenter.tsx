import StaticImage from '@/components/ui/common/image/StaticImage'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { TypeColor } from '@/shared/types/color/color.type'
import cn from 'clsx'
import { MoveLeft, MoveRight } from 'lucide-react'
import type { FC } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../ProductSingleContent.module.scss'
import type { IProductSingleContentCenter } from './interface/product-single-content-center.interface'

const ProductSingleContentCenter: FC<
	ICurrentProduct & TypeColor & IProductSingleContentCenter
> = ({ product, color, setSwiper, setCurrentIndex }) => {
	const images = color?.images || product.images

	return (
		<div className={styles.center}>
			<Swiper
				className={styles.images}
				modules={[Navigation]}
				slidesPerView="auto"
				grabCursor
				speed={400}
				onSwiper={(swiper) => setSwiper(swiper)}
				onSlideChange={({ activeIndex }) => {
					setCurrentIndex(activeIndex)
				}}
				navigation={{
					prevEl: '.swiper-prev',
					nextEl: '.swiper-next',
				}}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} className={styles.image}>
						<StaticImage
							className={styles.mainImage}
							src={image}
							width={450}
							height={450}
							alt={product.name}
						/>
					</SwiperSlide>
				))}
				<div className={styles.arrows}>
					<button className={cn(styles.arrow, 'swiper-prev')}>
						<MoveLeft />
					</button>
					<button className={cn(styles.arrow, 'swiper-next')}>
						<MoveRight />
					</button>
				</div>
			</Swiper>
		</div>
	)
}

export default ProductSingleContentCenter
