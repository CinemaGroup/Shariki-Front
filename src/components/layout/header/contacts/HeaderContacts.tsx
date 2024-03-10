import StaticImage from '@/components/ui/common/image/StaticImage'
import CallBtn from '@/components/ui/elements/call-btn/CallBtn'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderContacts.module.scss'

const HeaderContacts: FC = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Link href="tel: 71234567890" className={styles.link}>
					+7 (123) 456-78-90
				</Link>
			</li>
			<li className={styles.item}>
				<CallBtn className={styles.call}>
					<StaticImage
						src="/images/icons/phone.svg"
						width={20}
						height={20}
						alt="Phone"
					/>
					Обратный звонок
				</CallBtn>
			</li>
		</ul>
	)
}

export default HeaderContacts
