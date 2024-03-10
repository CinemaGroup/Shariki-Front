import type { IAdvantagesMenu } from '../interface/advantages-menu.interface'

export const ADVANTAGES_MENU_DATA: IAdvantagesMenu = {
	title: 'Почему стоит заказать шарики у нас?',
	items: [
		{
			name: 'Доставляем оперативно',
			description:
				'Отправка шаров по Мытищам осуществляется уже через час после получения заказа.',
			image: {
				width: 145,
				height: 145,
				src: '/images/other/advantages/advantage-1.png',
				alt: 'Доставляем оперативно',
			},
		},
		{
			name: 'Гарантируем долгий полет',
			description:
				'Шары с гелием, приобретаемые у нас отлично летают на протяжении от 24 часов до месяца.',
			image: {
				width: 145,
				height: 145,
				src: '/images/other/advantages/advantage-3.png',
				alt: 'Гарантируем долгий полет',
			},
		},
		{
			name: 'Украсим ваш праздник',
			description: 'Украшаем праздники и торжества под ключ.',
			image: {
				width: 145,
				height: 145,
				src: '/images/other/advantages/advantage-3.png',
				alt: 'Украсим ваш праздник',
			},
		},
	],
}
