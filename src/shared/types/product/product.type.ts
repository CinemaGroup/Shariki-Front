import type { ProductBySlugQuery, ProductsQuery } from '@/__generated__/output'

export type TypeProduct = ProductsQuery['products'][0]
export type TypeCurrentProductData = NonNullable<
	ProductBySlugQuery['productBySlug']
>
export type TypeCurrentProduct = NonNullable<TypeCurrentProductData['product']>
export type TypeCurrentProductSimilarProducts =
	TypeCurrentProductData['similarProducts']
