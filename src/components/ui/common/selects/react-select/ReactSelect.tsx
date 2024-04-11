'use client'

import '@/assets/styles/react-select.scss'
import cn from 'clsx'
import { useId, type FC } from 'react'
import type { OnChangeValue } from 'react-select'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import styles from './ReactSelect.module.scss'
import type {
	IOption,
	IReactSelect,
	IReactSelectValue,
} from './interface/react-select.interface'

const animatedComponents = makeAnimated()

const ReactSelect: FC<IReactSelect> = ({
	placeholder,
	label,
	error,
	isMulti,
	isSearchable = true,
	isCreatable = false,
	isClearable = true,
	isMenuFixed = true,
	options,
	field,
	isLoading,
	className,
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		if (!newValue) return field.onChange(isMulti ? [] : '')

		if (isMulti) {
			field.onChange(
				(newValue as IOption[]).map((item) => ({
					name: item.label,
					value: item.value,
				}))
			)
			console.log(newValue)
		} else {
			console.log(newValue)
			field.onChange({
				name: (newValue as IOption).label,
				value: (newValue as IOption).value,
			})
		}
	}

	const getValue = () => {
		if (field.value) {
			if (isMulti) {
				const fieldIds = field.value.map(
					(item: IReactSelectValue) => item.value
				)
				const filteredOptions = options.filter((option) =>
					fieldIds.includes(option.value)
				)

				return filteredOptions
			} else {
				console.log(field.value)
				console.log(options)
				return options.find((option) => option.value !== field.value)
			}
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<div className={cn(styles.selectContainer, className && className)}>
			{label && <label className={styles.label}>{label}</label>}
			{error && <p className={styles.error}>{error.message}</p>}
			{isCreatable ? (
				<CreatableSelect
					instanceId={useId()}
					classNamePrefix={`react-select`}
					options={options}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isClearable={isClearable}
					isLoading={isLoading}
					placeholder={placeholder || ''}
					menuPortalTarget={document.body}
					menuPosition={isMenuFixed ? 'fixed' : undefined}
					styles={{
						menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
						menu: (provided) => ({ ...provided, zIndex: 9999 }),
					}}
				/>
			) : (
				<Select
					instanceId={useId()}
					classNamePrefix={`react-select`}
					options={options}
					value={getValue()}
					isMulti={isMulti}
					isSearchable={isSearchable}
					isClearable={isClearable}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
					placeholder={placeholder || ''}
					menuPortalTarget={document.body}
					menuPosition={isMenuFixed ? 'fixed' : undefined}
					styles={{
						menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
						menu: (provided) => ({ ...provided, zIndex: 9999 }),
					}}
				/>
			)}
		</div>
	)
}

export default ReactSelect
