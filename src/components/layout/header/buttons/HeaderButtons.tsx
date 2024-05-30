'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import CartBtn from '@/components/ui/elements/cart-btn/CartBtn'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, type FC } from 'react'
import Burger from '../burger/Burger'
import styles from './HeaderButtons.module.scss'

const HeaderButtons: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const [isHydrated, setIsHydrated] = useState(false)

	useEffect(() => {
		setIsHydrated(true)
	}, [])

	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Link className={styles.link} href={PUBLIC_PAGES.LOGIN}>
					<StaticImage
						src="/images/icons/favorites.svg"
						width={34}
						height={34}
						alt="Favorites"
					/>
					Избранное
				</Link>
			</li>
			<li className={styles.item}>
				{isHydrated && <CartBtn className={styles.cart} />}
			</li>
			<li className={styles.item}>
				<button className={styles.burger} onClick={() => setIsShow(true)}>
					<Menu />
				</button>
				{isShow && <Burger close={() => setIsShow(false)} />}
			</li>
		</ul>
	)
}

export default HeaderButtons
