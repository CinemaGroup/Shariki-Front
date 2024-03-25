import Advantages from '@/components/blocks/advantages/Advantages'
import Posts from '@/components/blocks/posts/Posts'
import Products from '@/components/blocks/products/Products'
import Reviews from '@/components/blocks/reviews/Reviews'
import Slider from '@/components/blocks/slider/Slider'
import Tags from '@/components/blocks/tags/Tags'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import { useProducts } from '@/hooks/public/product/useProducts'
import { useTags } from '@/hooks/public/tag/useTags'
import type { FC } from 'react'

const Home: FC = async () => {
	const { tags } = await useTags()
	const { products: newestProducts } = await useProducts(false)
	const { products: saleProducts } = await useProducts(true)

	return (
		<>
			<Slider />
			<Section>
				<Container variant="lg">
					<Tags tags={tags.tags} />
				</Container>
			</Section>
			<Section>
				<Container variant="md">
					<Advantages />
				</Container>
			</Section>
			<Section>
				<Container variant="lg">
					<Products variant="newest" products={newestProducts.products} />
				</Container>
			</Section>
			<Section>
				<Container variant="sm">
					<Reviews />
				</Container>
			</Section>
			<Section>
				<Container variant="lg">
					<Products variant="sale" products={saleProducts.products} />
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
