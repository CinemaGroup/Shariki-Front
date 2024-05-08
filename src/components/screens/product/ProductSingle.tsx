'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Breadcrumb from '@/components/ui/elements/breadcrumb/Breadcrumb'
import Loader from '@/components/ui/elements/loader/Loader'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useCurrentProduct } from '@/hooks/public/product/useCurrentProduct'
import { IMenuItem } from '@/shared/interfaces/menu/menu.interface'
import { getParentCategories } from '@/utils/helpers/get-breadcrumb-categories'
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import styles from './ProductSingle.module.scss'
import ProductSingleAbout from './about/ProductSingleAbout'
import ProductSingleContent from './content/ProductSingleContent'
import ProductSingleSimilar from './similar/ProductSingleSimilar'

const ProductSingle: FC<{ slug: string }> = ({ slug }) => {
	const { back } = useRouter()
	const { product, similarProducts, error, loading } = useCurrentProduct(slug)

	if (loading) return <Loader />

	if (!product || error) return null

	let breadcrumbItems: IMenuItem[] = []
	if (product.categories[0]) {
		const parentCategories = getParentCategories(product.categories[0], 5)

		breadcrumbItems = parentCategories.map((category, index) => ({
			label: category.name,
			href: PUBLIC_PAGES.CATEGORY(category.slug),
		}))
	}

	breadcrumbItems.push({
		label: product.name,
		href: '',
	})

	return (
		<div className={styles.product}>
			<Section>
				<Breadcrumb items={breadcrumbItems} />
				<Container variant="smallest">
					<div className={styles.wrapper}>
						<button className={styles.back} onClick={back}>
							<MoveLeft /> ВЕРНУТЬСЯ
						</button>
						<ProductSingleContent product={product} />
						<ProductSingleAbout product={product} />
						<ProductSingleSimilar similarProducts={similarProducts} />
					</div>
				</Container>
			</Section>
		</div>
	)
}

export default ProductSingle
