'use client'

import Rubric from '@/components/blocks/rubric/Rubric'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageRubrics } from '@/hooks/manage/rubrics/useManageRubrics'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageRubrics.module.scss'

const ManageRubrics: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const { data, createRubric, deleteRubric, toggleRubric, duplicateRubric } =
		useManageRubrics(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Рубрики</h1>
					<button
						className={globalStyles.create}
						onClick={() => createRubric()}
					>
						<ListPlus />
						Создать Рубрику
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.rubrics && data.rubrics.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.rubrics}>
							{data.rubrics.map((rubric) => (
								<Rubric
									key={rubric.id}
									className={styles.rubric}
									rubric={rubric}
									place="admin"
									deleteHandler={() =>
										deleteRubric({
											variables: {
												id: rubric.id,
											},
										})
									}
									toggleHandler={() =>
										toggleRubric({
											variables: {
												id: rubric.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateRubric({
											variables: {
												id: rubric.id,
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

export default ManageRubrics
