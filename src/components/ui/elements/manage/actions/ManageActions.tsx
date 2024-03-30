import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import { Copy, Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ManageActions.module.scss'

const ManageActions: FC<IManageActions & { edit: string }> = ({
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	edit,
}) => {
	return (
		place === 'admin' && (
			<div className={styles.actions}>
				<button className={styles.remove} onClick={deleteHandler}>
					<Trash2 />
				</button>
				<button className={styles.duplicate} onClick={duplicateHandler}>
					<Copy />
				</button>
				<Link className={styles.edit} href={edit}>
					<Pencil />
				</Link>
			</div>
		)
	)
}

export default ManageActions
