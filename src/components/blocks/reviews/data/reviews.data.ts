import type { TypeReview } from '@/shared/types/review/review'

export const REVIEWS_DATA: TypeReview[] = Array.from({ length: 8 }, () => ({
	author: 'Ирина',
	content:
		'Заказывала шары с гелием за два дня до праздника, поэтому надо было, чтобы провисели три дня, до конца праздника. А вышло, так что большая часть шариков летали почти месяц. Честно говоря, мне они уже надоели спустя неделю, но дочка не позволяла выбрасывать пока не упадут)',
	photo: '/images/data/reviews/review.png',
}))
