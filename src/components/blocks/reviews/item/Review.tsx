import StaticImage from '@/components/ui/common/image/StaticImage'
import type { TypeReview } from '@/shared/types/review/review'
import type { FC } from 'react'
import styles from '../Reviews.module.scss'

const Review: FC<{ review: TypeReview }> = ({ review }) => {
	return (
		<li className={styles.item}>
			
			<StaticImage
				className={styles.photo}
				src={review.photo}
				width={190}
				height={190}
				alt={review.author}
			/>
			<StaticImage
				className={styles.brackets}
				src="/images/other/reviews/brackets.svg"
				width={47}
				height={21}
				alt="Скобки"
			/>
			<div className={styles.description}>{review.content}</div>
			<h3 className={styles.name}>{review.author}</h3>
		</li>
	)
}

export default Review
