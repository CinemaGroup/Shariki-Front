'use client'

import Characteristic from '@/components/blocks/characteristic/Characteristic'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageCharacteristics } from '@/hooks/manage/characteristics/useManageCharacteristics'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageCharacteristics.module.scss'

const ManageCharacteristics: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const {
		data,
		createCharacteristic,
		deleteCharacteristic,
		toggleCharacteristic,
	} = useManageCharacteristics(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Характеристики</h1>
					<button
						className={globalStyles.create}
						onClick={() => createCharacteristic()}
					>
						<ListPlus />
						Создать Характеристику
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.characteristics && data.characteristics.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.characteristics}>
							{data.characteristics.map((characteristic) => (
								<Characteristic
									key={characteristic.id}
									className={styles.characteristic}
									characteristic={characteristic}
									place="admin"
									deleteHandler={() =>
										deleteCharacteristic({
											variables: {
												id: characteristic.id,
											},
										})
									}
									toggleHandler={() =>
										toggleCharacteristic({
											variables: {
												id: characteristic.id,
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

export default ManageCharacteristics
