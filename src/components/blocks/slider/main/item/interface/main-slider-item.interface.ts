export interface IMainSliderItem {
	isBeginning: boolean
	isEnd: boolean
	prev: () => void
	next: () => void
	number: number
}
