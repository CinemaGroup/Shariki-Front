import type { FC } from 'react'
import styles from './Slider.module.scss'
import CollectionSlider from './collection/CollectionSlider'
import MainSlider from './main/MainSlider'
import Link from 'next/link'

const Slider: FC = () => {
	return (
		<div className={styles.sliders}>
			<MainSlider />
			<CollectionSlider />
			<Link className={styles.catalog} href="/catalog">
				<span className={styles.catalogIcon}>
					<span></span>
					<span></span>
					<span></span>
				</span>
				<span>КАТАЛОГ ТОВАРОВ</span>
			</Link>
		</div>
	)
}

export default Slider
