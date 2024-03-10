import type { ISocial } from '@/shared/interfaces/social/socials.interface'
import type { FC } from 'react'
import styles from './HeaderSocial.module.scss'
import HeaderSocialItem from './item/HeaderSocialItem'

const HeaderSocial: FC<{ social: ISocial }> = ({ social: { items } }) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<HeaderSocialItem key={index} item={item} />
			))}
		</ul>
	)
}

export default HeaderSocial
