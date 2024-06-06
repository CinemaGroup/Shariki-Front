import Advantages from '@/components/blocks/advantages/Advantages'
import Posts from '@/components/blocks/posts/Posts'
import PopularProducts from '@/components/blocks/products/PopularProducts'
import Products from '@/components/blocks/products/Products'
import Reviews from '@/components/blocks/reviews/Reviews'
import Slider from '@/components/blocks/slider/Slider'
import Tags from '@/components/blocks/tags/Tags'
import type { FC } from 'react'
import HomePostsBlock from './posts-block/HomePostsBlock'
import HomeReviewsBlock from './reviews-block/HomeReviewsBlock'

const Home: FC = () => {
	return (
		<>
			<Slider />
			<Tags />
			<Advantages />
			<Products />
			<Reviews />
			<HomeReviewsBlock />
			<PopularProducts />
			<Posts />
			<HomePostsBlock />
		</>
	)
}

export default Home
