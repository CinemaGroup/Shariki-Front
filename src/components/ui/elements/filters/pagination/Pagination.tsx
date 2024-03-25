'use client'

import cn from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { FC } from 'react'
import styles from './Pagination.module.scss'
import type { IPagination } from './interface/pagination.interface'

const Pagination: FC<IPagination> = ({
	numberPages,
	changePage,
	currentPage = 1,
}) => {
	const length = numberPages > 1 ? numberPages : null
	if (!length) return null

	return (
		<div className={styles.pagination}>
			{currentPage <= 1 && (
				<button
					className={cn(styles.arrow, styles.prev)}
					onClick={() =>
						changePage(currentPage > 1 ? (currentPage - 1).toString() : '1')
					}
				>
					<ChevronLeft />
				</button>
			)}
			<span className={styles.current}>{currentPage}</span>
			{currentPage >= numberPages && (
				<button
					className={cn(styles.arrow, styles.next)}
					onClick={() =>
						changePage(
							currentPage < numberPages
								? (currentPage + 1).toString()
								: numberPages.toString()
						)
					}
				>
					<ChevronRight />
				</button>
			)}
		</div>
	)
}

export default Pagination
