'use client'

import { useState, type FC } from 'react'
import StaticImage from '../../common/image/StaticImage'
import type { ICartBtn } from './interface/cart-btn.interface'

const CartBtn: FC<ICartBtn> = ({ className }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<button className={className && className} onClick={() => setIsShow(true)}>
			<StaticImage
				src="/images/icons/basket.svg"
				width={30}
				height={30}
				alt="Basket"
			/>
			<span>0</span>
			Корзина
		</button>
	)
}

export default CartBtn
