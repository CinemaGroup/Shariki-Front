import { Sort, useCharacteristicsQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const useManageSelectCharacteristics = () => {
	const { data } = useCharacteristicsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	return {
		characteristics: data?.characteristics.map(
			(characteristic): IOption => ({
				label: characteristic.name,
				value: characteristic.id,
			})
		),
	}
}
