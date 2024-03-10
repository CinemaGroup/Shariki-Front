import cn from 'clsx'
import { useState, type FC } from 'react'
import StaticImage from '../../image/StaticImage'
import styles from './SearchField.module.scss'
import type { ISearchField } from './interface/search-field.interface'

const SearchField: FC<ISearchField> = ({
	className,
	placeholder = 'Поиск',
	label,
}) => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.field}>
			{label && <label className={styles.label}>{label}</label>}
			<div className={cn(styles.search, className && className)}>
				<input
					placeholder={placeholder}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className={styles.input}
				/>
				<StaticImage
					className={styles.icon}
					src="/images/icons/search.png"
					width={30}
					height={30}
					alt="Search"
				/>
			</div>
		</div>
	)
}

export default SearchField
