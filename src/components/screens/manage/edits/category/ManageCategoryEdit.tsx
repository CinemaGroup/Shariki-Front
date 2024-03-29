'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import ReactSelect from '@/components/ui/common/selects/react-select/ReactSelect'
import { useManageCategoryEdit } from '@/hooks/manage/categories/useManageCategoryEdit'
import { useManageSelectCategories } from '@/hooks/manage/categories/useManageSelectCategories'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManageCategoryEdit.module.scss'

const ManageCategoryEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageCategoryEdit(queryId)
	const { categories } = useManageSelectCategories(data?.categoryById.name)

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>
						Редактирование - {data?.categoryById.name || 'Категория'}
					</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', REQUIRED_VALIDATION('Имя'))}
							className={styles.field}
							label="Имя"
							error={errors.name}
						/>
						<Controller
							name="parent"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={categories || []}
									label="Родительская категория (Не обязательно)"
									error={error}
									className={styles.select}
								/>
							)}
						/>
						<Button
							buttonClassName={globalStyles.update}
							wrapperClassName={globalStyles.updateWrapper}
						>
							Обновить
						</Button>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageCategoryEdit
