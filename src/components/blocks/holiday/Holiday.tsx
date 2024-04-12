import StaticImage from '@/components/ui/common/image/StaticImage'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { TypeHoliday } from '@/shared/types/holiday/holiday.type'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Holiday.module.scss'
import { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'

const Holiday: FC<{ holiday: TypeHoliday } & IClassName> = ({
	holiday,
	className,
}) => {
	return (
		<div className={cn(styles.item, className && className)}>
			<div className={styles.card}>
				<StaticImage
					className={styles.leftBalloon}
					src="/images/data/slider/second/balloon.png"
					width={0}
					height={0}
					sizes="auto"
					alt="Balloon"
				/>
				{holiday.rightImage && (
					<StaticImage
						className={styles.rightBalloon}
						src={holiday.rightImage}
						width={0}
						height={0}
						sizes="100vw"
						alt="Balloon"
					/>
				)}
				<StaticImage
					className={styles.tree}
					src={holiday.imagePath}
					width={0}
					height={0}
					sizes="100vw"
					alt="Tree"
				/>
				<StaticImage
					className={styles.decor}
					src={holiday.decorPath}
					width={0}
					height={0}
					sizes="100vw"
					alt="Decor"
				/>
				<span className={styles.name}>{holiday.name}</span>
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
		</div>
	)
}

export default Holiday
