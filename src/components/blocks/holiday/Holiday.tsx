import StaticImage from '@/components/ui/common/image/StaticImage'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { TypeHoliday } from '@/shared/types/holiday/holiday.type'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Holiday.module.scss'

const Holiday: FC<TypeHoliday & IClassName & IManageActions> = ({
	deleteHandler,
	toggleHandler,
	place,
	holiday,
	className,
}) => {
	return (
		<div className={cn(styles.item, className && className)}>
			<div className={styles.card}>
				<StaticImage
					className={styles.leftBalloon}
					src="/images/other/slider/balloon-left.png"
					width={84}
					height={101}
					alt="Balloon"
				/>
				<StaticImage
					className={styles.rightBalloon}
					src="/images/other/slider/balloon-right.png"
					width={57}
					height={125}
					alt="Balloon"
				/>
				<StaticImage
					className={styles.tree}
					src="/images/other/slider/tree.png"
					width={68}
					height={101}
					alt="Tree"
				/>
				<StaticImage
					className={styles.decor}
					src="/images/other/slider/decor.png"
					width={154}
					height={36}
					alt="Decor"
				/>
				<span className={styles.name}>Новый год</span>
			</div>
			<Link className={styles.link} href="/catalog">
				В каталог
				<span>
					<StaticImage
						src="/images/icons/chevron-right.png"
						width={11}
						height={11}
						alt="Arrow"
					/>
				</span>
			</Link>
			<ManageActions
				place={place}
				deleteHandler={deleteHandler}
				toggleHandler={toggleHandler}
				edit={ADMIN_EDITS.HOLIDAY(holiday.id)}
			/>
		</div>
	)
}

export default Holiday
