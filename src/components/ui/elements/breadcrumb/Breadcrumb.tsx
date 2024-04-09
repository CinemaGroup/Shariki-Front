'use client'

import { PUBLIC_PAGES } from '@/constants/url.constants'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import { useState, type FC } from 'react'
import SearchField from '../../common/form/search-field/SearchField'
import styles from './Breadcrumb.module.scss'

const Breadcrumb: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.breadcrumb}>
			<Link href={PUBLIC_PAGES.CATALOG} className={styles.catalog}>
				<AlignJustify />
				КАТАЛОГ ТОВАРОВ
			</Link>
			<div className={styles.fill}>
				<ul className={styles.list}>
					<li className={styles.item}>Главная</li>
					<li className={styles.item}>Воздушные шары из латекса</li>
					<li className={styles.item}>Круглые без рисунка</li>
					<li className={styles.item}>
						Шар (5''/13 см) Красный, пастель, 100 шт.
					</li>
				</ul>
				<SearchField
					wrapperClassName={styles.search}
					inputClassName={styles.input}
					searchTerm={searchTerm}
					handleSearch={(e) => setSearchTerm(e.target.value)}
					placeholder='Искать товар'
				/>
			</div>
		</div>
	)
}

export default Breadcrumb
