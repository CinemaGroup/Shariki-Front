import type { FC } from 'react'
import styles from './Slider.module.scss'
import CollectionSlider from './collection/CollectionSlider'
import MainSlider from './main/MainSlider'

const Slider: FC = () => {
	return (
		<div className={styles.sliders}>
			<MainSlider />
			<CollectionSlider />
		</div>
	)
}

export default Slider
