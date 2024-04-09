'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Breadcrumb from '@/components/ui/elements/breadcrumb/Breadcrumb'
import { useCurrentProduct } from '@/hooks/public/product/useCurrentProduct'
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import styles from './ProductSingle.module.scss'
import ProductSingleAbout from './about/ProductSingleAbout'
import ProductSingleContent from './content/ProductSingleContent'
import ProductSingleSimilar from './similar/ProductSingleSimilar'

const ProductSingle: FC<{ slug: string }> = ({ slug }) => {
	const { back } = useRouter()
	const { product, similarProducts, error } = useCurrentProduct(slug)

	if (!product || error) return null

	return (
		<div className={styles.product}>
			<Section>
				<Breadcrumb />
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
