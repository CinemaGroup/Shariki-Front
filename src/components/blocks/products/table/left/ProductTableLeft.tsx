import FilledImage from '@/components/ui/common/image/FilledImage'
import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import type { TypeColor } from '@/shared/types/color/color.type'
import { isNewest } from '@/utils/helpers/is-newest.util'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { IProductProps } from '../../interface/products.interface'
import styles from '../ProductTable.module.scss'

const ProductTableLeft: FC<IProductProps & TypeColor> = ({
	product,
	color,
}) => {
	const { push } = useRouter()

	const { setSwiper, setBeginning, setEnd } = useSwiper()
	const images = color?.images || product.images

	return (
		<div className={styles.left}>
			{product.types.length > 0 && (
				<div className={styles.types}>
					{product.types.map((type, index) => (
						<div className={styles.type} key={index}>
							<StaticImage
								className="w-auto h-auto"
								src={type.iconPath}
								width={0}
								height={0}
								sizes="100vw"
								alt="Type"
							/>
						</div>
					))}
				</div>
			)}
			<div className={styles.leftFill}>
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
				<div className={styles.info}>
					{(product.oldPrice || isNewest(product.createdAt)) && (
						<div className={styles.tags}>
							{product.oldPrice && (
								<span className={styles.saleTag}>Акция</span>
							)}
							{isNewest(product.createdAt) && (
								<span className={styles.newestTag}>Новинка</span>
							)}
						</div>
					)}
					<h3 className={styles.name}>{product.name}</h3>
				</div>
			</div>
		</div>
	)
}

export default ProductTableLeft
