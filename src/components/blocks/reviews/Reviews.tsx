'use client'

import { Sort, Status } from '@/__generated__/output'
import Heading from '@/components/ui/common/heading/Heading'
import { useReviews } from '@/hooks/public/review/useReviews'
import type { FC } from 'react'
import styles from './Reviews.module.scss'
import Review from './item/Review'

const Reviews: FC = () => {
	const { data } = useReviews({
		status: Status.Published,
		sort: Sort.Newest,
	})

	return (
		<div className={styles.reviews}>
			<Heading className={styles.heading}>Отзывы о нас</Heading>
			<ul className={styles.list}>
				{data?.reviews.map((review, index) => (
					<Review key={index} review={review} place="public" />
				))}
			</ul>
		</div>
	)
}

export default Reviews
