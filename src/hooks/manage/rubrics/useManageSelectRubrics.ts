import { Sort, useRubricsQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const useManageSelectRubrics = () => {
	const { data } = useRubricsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	console.log(data?.rubrics.map(
		(rubric): IOption => ({
			label: rubric.name,
			value: rubric.id,
		})
	),)

	return {
		rubrics: data?.rubrics.map(
			(rubric): IOption => ({
				label: rubric.name,
				value: rubric.id,
			})
		),
	}
}
