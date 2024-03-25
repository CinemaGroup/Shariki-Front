export const ADMIN_PAGES = {
	HOME: '/manage',
	PRODUCTS: '/manage/products',
	CHARACTERISTICS: '/manage/characteristics',
	TAGS: '/manage/tags',
	TYPES: '/manage/types',
	CATEGORIES: '/manage/categories',
	HOLIDAYS: '/manage/holidays',
}

export const ADMIN_EDITS = {
	PRODUCT: (productId: number) =>
		`${ADMIN_PAGES.HOME}/product/edit/${productId}`,
	CHARACTERISTIC: (characteristicId: number) =>
		`${ADMIN_PAGES.HOME}/characteristic/edit/${characteristicId}`,
	TAG: (tagId: number) => `${ADMIN_PAGES.HOME}/tag/edit/${tagId}`,
	TYPE: (typeId: number) => `${ADMIN_PAGES.HOME}/type/edit/${typeId}`,
	CATEGORY: (categoryId: number) =>
		`${ADMIN_PAGES.HOME}/category/edit/${categoryId}`,
	HOLIDAY: (holidayId: number) =>
		`${ADMIN_PAGES.HOME}/holiday/edit/${holidayId}`,
}

export const USER_PAGES = {
	PROFILE: '/profile',
}


export const PUBLIC_PAGES = {
	HOME: '/',
	LOGIN: '/auth?type=login',
	REGISTER: '/auth?type=register',
}
