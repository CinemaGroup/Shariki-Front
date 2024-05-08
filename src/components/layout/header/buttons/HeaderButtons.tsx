import StaticImage from '@/components/ui/common/image/StaticImage'
import CartBtn from '@/components/ui/elements/cart-btn/CartBtn'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderButtons.module.scss'

const HeaderButtons: FC = () => {
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
				<CartBtn className={styles.cart} />
			</li>
		</ul>
	)
}

export default HeaderButtons
