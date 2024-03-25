'use client'

import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import cn from 'clsx'
import { useState, type FC } from 'react'
import styles from '../Products.module.scss'
import type { IProductPropsWithVariant } from '../interface/products.interface'
import ProductButtons from './buttons/ProductButtons'
import ProductColors from './colors/ProductColors'
import ProductImages from './images/ProductImages'
import ProductInfo from './info/ProductInfo'
import ProductSizes from './sizes/ProductSizes'
import ProductTop from './top/ProductTop'

const Product: FC<IProductPropsWithVariant & IManageActions & IClassName> = ({
	product,
	variant,
	deleteHandler,
	toggleHandler,
	place,
	className,
}) => {
	const [color, setColor] = useState(product.colors[0])
	const [size, setSize] = useState(product.sizes[0])


	return (
		<div className={cn(styles.item, className && className)}>
			<ProductTop variant={variant} product={product} />
			<ProductImages product={product} color={color} />
			<ProductInfo product={product} />
			<ProductSizes product={product} size={size} setSize={setSize} />
			<ProductColors product={product} color={color} setColor={setColor} />
			<ProductButtons product={product} />
			<ManageActions
				toggleHandler={toggleHandler}
				deleteHandler={deleteHandler}
				place={place}
				edit={ADMIN_EDITS.PRODUCT(product.id)}
			/>
		</div>
	)
}

export default Product
