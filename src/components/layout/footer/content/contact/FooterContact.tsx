import Link from 'next/link'
import type { FC } from 'react'
import styles from '../FooterContent.module.scss'
import FooterCards from './cards/FooterCards'

const FooterContact: FC = () => {
	return (
		<div className={styles.contact}>
			<h3 className={styles.title}>Нужна помощь?</h3>
			<Link href="tel: 71234567890" className={styles.phone}>
				+7 (123) 456-78-90
			</Link>
			<p className={styles.workdays}>Каждый день с 9:00 до 18:00</p>
			<FooterCards />
		</div>
	)
}

export default FooterContact
