import { Status } from '@/__generated__/output'
import type { TypeProduct } from '@/shared/types/product/product.type'

export const PRODUCTS_SALE_DATA: TypeProduct[] = Array(8)
	.fill(0)
	.map((_, index) => ({
		id: index,
		name: "Шар (5''/13 см) Красный, пастель, 100 шт.",
		slug: 'shar-5',
		sku: '512-05C02',
		description:
			'Воздушные шары из натурального латекса без искусственных добавок.Шары ТМ 512 производятся на китайской фабрике, поддерживающей высокие стандарты европейского качества, благодаря которым воздушные шары этой торговой марки стали достойной альтернативой премиум-сегмента. Фабрика имеет сертификат BSCI.Латексные шары ТМ 512 плотные, но эластичные, хорошо держат форму, не теряют цвет и не деформируются.Тактильно приятный латекс с низким содержанием талька и мягкими хвостиками шара обеспечивает комфортную работу аэродизайнера при создании композиций любой сложности, и украсит любой праздник или торжественное событие.',
		images: [
			'/images/data/products/product.png',
			'/images/data/products/product.png',
			'/images/data/products/product.png',
		],
		packageQuantity: 100,
		price: '130,00',
		oldPrice: '260,00',
		views: 0,
		boughtTimes: 0,
		sizes: [
			{
				size: '5”/13',
				price: 10.0,
				oldPrice: 15.0,
			},
			{
				size: '9”/13',
				price: 8.0,
				oldPrice: 9.0,
			},
			{
				size: '10”/25',
				price: 17.0,
			},
			{
				size: '12”/30',
				price: 20.0,
			},
		],
		colors: [
			{
				color: '#FF0000',
				price: 10.0,
				oldPrice: 15.0,
			},
			{
				color: '#04C900',
				price: 8.0,
				oldPrice: 9.0,
			},
			{
				color: '#0AB5FF',
				price: 17.0,
			},
			{
				color: '#FFE500',
				price: 20.0,
			},
			{
				color: '#DF00E3',
				price: 23.0,
			},
		],
		type: {
			name: 'Type',
			iconPath: '/images/data/products/type.png',
		},
		status: Status.Published,
		createdAt: '',
	}))

export const PRODUCTS_NEWEST_DATA: TypeProduct[] = Array(8)
	.fill(0)
	.map((_, index) => ({
		id: index,
		name: "Шар (5''/13 см) Красный, пастель, 100 шт.",
		slug: 'shar-5',
		sku: '512-05C02',
		description:
			'Воздушные шары из натурального латекса без искусственных добавок.Шары ТМ 512 производятся на китайской фабрике, поддерживающей высокие стандарты европейского качества, благодаря которым воздушные шары этой торговой марки стали достойной альтернативой премиум-сегмента. Фабрика имеет сертификат BSCI.Латексные шары ТМ 512 плотные, но эластичные, хорошо держат форму, не теряют цвет и не деформируются.Тактильно приятный латекс с низким содержанием талька и мягкими хвостиками шара обеспечивает комфортную работу аэродизайнера при создании композиций любой сложности, и украсит любой праздник или торжественное событие.',
		images: [
			'/images/data/products/product.png',
			'/images/data/products/product.png',
			'/images/data/products/product.png',
		],
		packageQuantity: 100,
		price: '260,00',
		views: 0,
		boughtTimes: 0,
		sizes: [
			{
				size: '5”/13',
				price: 10.0,
				oldPrice: 15.0,
			},
			{
				size: '9”/13',
				price: 8.0,
				oldPrice: 9.0,
			},
			{
				size: '10”/25',
				price: 17.0,
			},
			{
				size: '12”/30',
				price: 20.0,
			},
		],
		colors: [
			{
				color: '#FF0000',
				price: 10.0,
				oldPrice: 15.0,
			},
			{
				color: '#04C900',
				price: 8.0,
				oldPrice: 9.0,
			},
			{
				color: '#0AB5FF',
				price: 17.0,
			},
			{
				color: '#FFE500',
				price: 20.0,
			},
			{
				color: '#DF00E3',
				price: 23.0,
			},
		],
		type: {
			name: 'Type',
			iconPath: '/images/data/products/type.png',
		},
		status: Status.Published,
		createdAt: '',
	}))
