'use client'

import Tag from '@/components/blocks/tags/item/Tag'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageTags } from '@/hooks/manage/tags/useManageTags'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageTags.module.scss'

const ManageTags: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const { data, createTag, deleteTag, toggleTag, duplicateTag } = useManageTags(
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
					<h1 className={globalStyles.heading}>Метки</h1>
					<button className={globalStyles.create} onClick={() => createTag()}>
						<ListPlus />
						Создать Метку
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.tags && data.tags.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.tags}>
							{data.tags.map((tag) => (
								<Tag
									key={tag.id}
									className={styles.tag}
									tag={tag}
									place="admin"
									deleteHandler={() =>
										deleteTag({
											variables: {
												id: tag.id,
											},
										})
									}
									toggleHandler={() =>
										toggleTag({
											variables: {
												id: tag.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateTag({
											variables: {
												id: tag.id,
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

export default ManageTags
