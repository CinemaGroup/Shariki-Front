import type { ISocial } from '@/shared/interfaces/social/socials.interface'

export const HEADER_SOCIAL_DATA: ISocial = {
	items: [
		{
			icon: {
				src: '/images/icons/vk.svg',
				width: 30,
				height: 30,
				alt: 'VKontakte',
			},
			href: '/',
		},
		{
			icon: {
				src: '/images/icons/instagram.svg',
				width: 26,
				height: 26,
				alt: 'Instagram',
			},
			href: '/',
		},
		{
			icon: {
				src: '/images/icons/ok.svg',
				width: 25,
				height: 25,
				alt: 'Ok',
			},
			href: '/',
		},
	],
}
