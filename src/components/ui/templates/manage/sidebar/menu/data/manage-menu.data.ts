import { ADMIN_PAGES } from '@/constants/url.constants'
import type { IMenu } from '@/shared/interfaces/menu/menu.interface'

export const MANAGE_MENU_DATA: IMenu = {
	items: [
		{
			label: 'Продукты',
			href: `${ADMIN_PAGES.PRODUCTS}`,
		},
		{
			label: 'Характеристики',
			href: `${ADMIN_PAGES.CHARACTERISTICS}`,
		},
		{
			label: 'Метки',
			href: `${ADMIN_PAGES.TAGS}`,
		},
		{
			label: 'Модели',
			href: `${ADMIN_PAGES.TYPES}`,
		},
		{
			label: 'Категории',
			href: `${ADMIN_PAGES.CATEGORIES}`,
		},
		{
			label: 'Праздники',
			href: `${ADMIN_PAGES.HOLIDAYS}`,
		},
		{
			label: 'Коллекции',
			href: `${ADMIN_PAGES.COLLECTIONS}`,
		},
	],
}
