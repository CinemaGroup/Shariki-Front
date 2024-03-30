'use client'

import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageCategories } from '@/hooks/manage/categories/useManageCategories'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageCategories.module.scss'
import Category from '@/components/blocks/category/Category'

const ManageCategories: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const { data, createCategory, deleteCategory, toggleCategory, duplicateCategory } =
		useManageCategories(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Категории</h1>
					<button className={globalStyles.create} onClick={() => createCategory()}>
						<ListPlus />
						Создать Категорию
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.categories && data.categories.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.categories}>
							{data.categories.map((category) => (
								<Category
									key={category.id}
									className={styles.category}
									category={category}
									place="admin"
									deleteHandler={() =>
										deleteCategory({
											variables: {
												id: category.id,
											},
										})
									}
									toggleHandler={() =>
										toggleCategory({
											variables: {
												id: category.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateCategory({
											variables: {
												id: category.id,
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

export default ManageCategories
