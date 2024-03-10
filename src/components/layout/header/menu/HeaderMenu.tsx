import type { IMenu } from '@/shared/interfaces/menu/menu.interface'
import type { FC } from 'react'
import styles from './HeaderMenu.module.scss'
import HeaderMenuItem from './item/HeaderMenuItem'

const HeaderMenu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{items.map((item, index) => (
					<HeaderMenuItem key={index} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default HeaderMenu
