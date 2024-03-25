'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import UploadField from '@/components/ui/common/form/upload-field/UploadField'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import { useManageHolidayEdit } from '@/hooks/manage/holidays/useManageHolidayEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManageHolidayEdit.module.scss'

const ManageHolidayEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageHolidayEdit(queryId)

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>
						Редактирование - {data?.holidayById.name || 'Праздник'}
					</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', REQUIRED_VALIDATION('Имя'))}
							className={styles.field}
							label="Имя"
							error={errors.name}
						/>
						<Controller
							name="imagePath"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.upload}
									onChange={onChange}
									value={value}
									error={error}
									label="Картинка"
								/>
							)}
							rules={REQUIRED_VALIDATION('Картинка')}
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

export default ManageHolidayEdit
