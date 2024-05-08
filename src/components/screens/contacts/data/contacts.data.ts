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
			content: '<a href="tel: 79264036635">+7 (926) 403 - 66 - 35</a>',
		},
		{
			icon: Mail,
			name: 'Почта',
			content: '<a href="mailto: info@noras.ru">info@noras.ru</a>',
		},
	],
}
