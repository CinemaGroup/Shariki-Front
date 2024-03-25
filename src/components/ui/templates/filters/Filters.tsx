'use client'

import { IQueryFilters } from '@/shared/interfaces/filter/filter.interface'
import { FC } from 'react'
import PublishedFilter from '../../elements/filters/published/PublishedFilter'
import SortFilter from '../../elements/filters/sort/SortFilter'
import styles from './Filters.module.scss'

const Filters: FC<IQueryFilters> = ({
	variant,
	place,
	queryParams,
	updateQueryFilters,
}) => {
	return (
		<div className={styles.filters}>
			<SortFilter
				sort={queryParams.sort}
				updateQueryFilters={updateQueryFilters}
			/>
			{place === 'manage' && (
				<PublishedFilter
					status={queryParams.status}
					updateQueryFilters={updateQueryFilters}
				/>
			)}
			{/* <PerPageFilter
				perPage={queryParams.perPage}
				updateQueryFilters={updateQueryFilters}
			/> */}
		</div>
	)
}

export default Filters
