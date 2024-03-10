import type { IMenu } from '@/shared/interfaces/menu/menu.interface'

export const HEADER_MENU_DATA: IMenu = {
	items: [
		{
			label: 'Покупателям',
			href: '/buyers',
		},
		{
			label: 'Доставка и оплата',
			href: '/shipping-and-payment',
		},
		{
			label: 'О компании',
			href: '/about',
		},
		{
			label: 'Контакты',
			href: '/contacts',
		},
	],
}
