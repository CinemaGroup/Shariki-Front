import Heading from '@/components/ui/common/heading/Heading'
import type { FC } from 'react'
import styles from './Reviews.module.scss'
import { REVIEWS_DATA } from './data/reviews.data'
import Review from './item/Review'

const Reviews: FC = () => {
	return (
		<div className={styles.reviews}>
			<Heading className={styles.heading}>Отзывы о нас</Heading>
			<ul className={styles.list}>
				{REVIEWS_DATA.map((review, index) => (
					<Review key={index} review={review} />
				))}
			</ul>
		</div>
	)
}

export default Reviews
