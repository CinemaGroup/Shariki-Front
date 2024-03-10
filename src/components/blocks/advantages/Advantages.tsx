import type { FC } from 'react'
import styles from './Advantages.module.scss'
import AdvantagesInfo from './info/AdvantagesInfo'
import AdvantagesMenu from './menu/AdvantagesMenu'

const Advantages: FC = () => {
	return (
		<div className={styles.advantages}>
			<AdvantagesInfo />
			<AdvantagesMenu />
		</div>
	)
}

export default Advantages
