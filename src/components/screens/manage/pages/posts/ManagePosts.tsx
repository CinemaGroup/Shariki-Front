'use client'

import Post from '@/components/blocks/posts/item/Post'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManagePosts } from '@/hooks/manage/posts/useManagePosts'
import { useFilters } from '@/hooks/other/filters/useFilters'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManagePosts.module.scss'

const ManagePosts: FC = () => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ variant: 'default', place: 'manage' })
	const { data, createPost, deletePost, togglePost, duplicatePost } =
		useManagePosts(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Посты</h1>
					<button className={globalStyles.create} onClick={() => createPost()}>
						<ListPlus />
						Создать Пост
					</button>
				</div>
				<Filters
					variant="default"
					place="manage"
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{data?.posts && data.posts.length > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.posts}>
							{data.posts.map((post) => (
								<Post
									key={post.id}
									className={styles.post}
									post={post}
									place="admin"
									deleteHandler={() =>
										deletePost({
											variables: {
												id: post.id,
											},
										})
									}
									toggleHandler={() =>
										togglePost({
											variables: {
												id: post.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicatePost({
											variables: {
												id: post.id,
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

export default ManagePosts
