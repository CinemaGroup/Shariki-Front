'use client'

import Holiday from '@/components/blocks/holiday/Holiday'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageHolidays } from '@/hooks/manage/holidays/useManageHolidays'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageHolidays.module.scss'

const ManageHolidays: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const { data, createHoliday, deleteHoliday, toggleHoliday, duplicateHoliday } =
		useManageHolidays(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Праздники</h1>
					<button
						className={globalStyles.create}
						onClick={() => createHoliday()}
					>
						<ListPlus />
						Создать Праздник
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.holidays && data.holidays.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.holidays}>
							{data.holidays.map((holiday) => (
								<Holiday
									key={holiday.id}
									className={styles.holiday}
									holiday={holiday}
									place="admin"
									deleteHandler={() =>
										deleteHoliday({
											variables: {
												id: holiday.id,
											},
										})
									}
									toggleHandler={() =>
										toggleHoliday({
											variables: {
												id: holiday.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateHoliday({
											variables: {
												id: holiday.id,
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

export default ManageHolidays
