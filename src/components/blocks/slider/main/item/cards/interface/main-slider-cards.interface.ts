export interface IMainSliderCardPopup {
	name: string
	content: string
	imagePath: string
}

export interface IMainSliderCard {
	name: string
	imagePath: string
	popup: IMainSliderCardPopup
}

export interface IMainSliderCards {
	items: IMainSliderCard[]
}