export interface IManageActions {
	place: 'admin' | 'public'
	deleteHandler?: () => void
	toggleHandler?: () => void
}