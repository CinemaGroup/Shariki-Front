import type { TypeCatalogCategories } from '@/shared/types/catalog/catalog.type'

export const getParentCategories = (
	category: TypeCatalogCategories[0],
	level: number
): TypeCatalogCategories => {
	const allCategories: TypeCatalogCategories = []

	const addCategoriesRecursively = (
		cat: TypeCatalogCategories[0],
		lv: number
	) => {
		if (cat && lv > 0) {
			allCategories.push(cat)
			if (cat.parent) {
				addCategoriesRecursively(cat.parent, lv - 1)
			}
		}
	}

	addCategoriesRecursively(category, level)

	// Filter out categories without a parent
	const parentCategories = allCategories.filter((cat) => cat.parent !== null)

	// Filter out duplicates based on slug
	const uniqueCategories = parentCategories.filter(
		(c, index, self) => index === self.findIndex((cat) => cat.slug === c.slug)
	)

	return uniqueCategories
}
