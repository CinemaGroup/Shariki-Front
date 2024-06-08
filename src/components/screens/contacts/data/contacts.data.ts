import { Mail, MapPinned, Smartphone } from 'lucide-react'
import type { IContacts } from '../interface/contacts.interface'

export const CONTACTS_DATA: IContacts = {
	items: [
		{
			icon: MapPinned,
			name: 'Адрес',
			content:
				'Адрес в г. Москва: 123100, г. Москва,1-й Красногвардейский пр-д 22, стр. 2',
		},
		{
			icon: Smartphone,
			name: 'Телефон',
			content: '<a href="tel: 79774404060">+7 (977) 440-40-60</a>',
		},
		{
			icon: Mail,
			name: 'Почта',
			content: '<a href="mailto: skoroprazdnik@inbox.ru">skoroprazdnik@inbox.ru</a>',
		},
	],
}
