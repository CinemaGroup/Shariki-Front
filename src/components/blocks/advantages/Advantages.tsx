import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'
import styles from './Advantages.module.scss'
import AdvantagesInfo from './info/AdvantagesInfo'
import AdvantagesMenu from './menu/AdvantagesMenu'

const Advantages: FC = () => {
	return (
		<Section className={styles.section}>
			<Heading className={styles.heading}>ПРЕИМУЩЕСТВА</Heading>
			<Container variant="md">
				<div className={styles.advantages}>
					<AdvantagesInfo />
					<AdvantagesMenu />
				</div>
			</Container>
		</Section>
	)
}

export default Advantages
