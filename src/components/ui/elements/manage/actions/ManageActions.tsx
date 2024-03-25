import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import { Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ManageActions.module.scss'

const ManageActions: FC<IManageActions & { edit: string }> = ({
	deleteHandler,
	place,
	edit,
}) => {
	return (
		place === 'admin' && (
			<div className={styles.actions}>
				<button className={styles.remove} onClick={deleteHandler}>
					<Trash2 />
				</button>
				<Link className={styles.edit} href={edit}>
					<Pencil />
				</Link>
			</div>
		)
	)
}

export default ManageActions
