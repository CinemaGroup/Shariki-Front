'use client'

import Type from '@/components/blocks/type/Type'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageTypes } from '@/hooks/manage/types/useManageTypes'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageTypes.module.scss'

const ManageTypes: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const { data, createType, deleteType, toggleType } = useManageTypes(
		queryParams,
		debounceSearch
	)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Типы</h1>
					<button className={globalStyles.create} onClick={() => createType()}>
						<ListPlus />
						Создать Тип
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.types && data.types.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.types}>
							{data.types.map((type) => (
								<Type
									key={type.id}
									className={styles.type}
									type={type}
									place="admin"
									deleteHandler={() =>
										deleteType({
											variables: {
												id: type.id,
											},
										})
									}
									toggleHandler={() =>
										toggleType({
											variables: {
												id: type.id,
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

export default ManageTypes
