import Home from '@/components/screens/home/Home'
import { useProducts } from '@/hooks/public/product/useProducts'
import { useTags } from '@/hooks/public/tag/useTags'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default function HomePage() {
	return (
		<Home />
	)
}
