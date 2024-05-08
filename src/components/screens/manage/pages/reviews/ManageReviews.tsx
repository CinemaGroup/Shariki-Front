'use client'

import Review from '@/components/blocks/reviews/item/Review'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageReviews } from '@/hooks/manage/reviews/useManageReviews'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageReviews.module.scss'

const ManageReviews: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const { data, createReview, deleteReview, toggleReview, duplicateReview } =
		useManageReviews(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Отзывы</h1>
					<button
						className={globalStyles.create}
						onClick={() => createReview()}
					>
						<ListPlus />
						Создать Отзыв
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.reviews && data.reviews.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.reviews}>
							{data.reviews.map((review) => (
								<Review
									key={review.id}
									className={styles.review}
									review={review}
									place="admin"
									deleteHandler={() =>
										deleteReview({
											variables: {
												id: review.id,
											},
										})
									}
									toggleHandler={() =>
										toggleReview({
											variables: {
												id: review.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateReview({
											variables: {
												id: review.id,
											},
										})
									}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ManageReviews
