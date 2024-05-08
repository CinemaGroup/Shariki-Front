import Advantages from '@/components/blocks/advantages/Advantages'
import Posts from '@/components/blocks/posts/Posts'
import PopularProducts from '@/components/blocks/products/PopularProducts'
import Products from '@/components/blocks/products/Products'
import Reviews from '@/components/blocks/reviews/Reviews'
import Slider from '@/components/blocks/slider/Slider'
import Tags from '@/components/blocks/tags/Tags'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'

const Home: FC = () => {
	return (
		<>
			<Slider />
			<Section>
				<Container variant="lg">
					<Tags />
				</Container>
			</Section>
			<Section>
				<Container variant="md">
					<Advantages />
				</Container>
			</Section>
			<Section>
				<Container variant="lg">
					<Products />
				</Container>
			</Section>
			<Section>
				<Container variant="sm">
					<Reviews />
				</Container>
			</Section>
			<Section>
				<Container variant="lg">
					<PopularProducts />
				</Container>
			</Section>
			<Section>
				<Container variant="sm">
					<Posts />
				</Container>
			</Section>
		</>
	)
}

export default Home
