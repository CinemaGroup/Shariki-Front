import cn from 'clsx'
import { type FC } from 'react'
import StaticImage from '../../image/StaticImage'
import globalStyles from '../Form.module.scss'
import styles from './SearchField.module.scss'
import type { ISearchField } from './interface/search-field.interface'

const SearchField: FC<ISearchField> = ({
	size = 'md',
	className,
	wrapperClassName,
	inputClassName,
	placeholder = 'Поиск',
	label,
	searchTerm,
	handleSearch,
}) => {
	return (
		<div
			className={cn(globalStyles.field, wrapperClassName && wrapperClassName)}
		>
			{label && <label className={globalStyles.label}>{label}</label>}
			<div
				className={cn(
					styles.search,
					{
						[styles.small]: size === 'sm',
						[styles.medium]: size === 'md',
					},
					className && className
				)}
			>
				<input
					placeholder={placeholder}
					value={searchTerm}
					onChange={handleSearch}
					className={cn(styles.input, inputClassName && inputClassName)}
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
