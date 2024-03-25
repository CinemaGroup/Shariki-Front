import {
	useProductByIdQuery,
	useUpdateProductMutation,
	type ProductInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageProductEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<ProductInput>({
		mode: 'onChange',
	})
	const sizes = useFieldArray({
		control,
		name: 'sizes',
	})
	const colors = useFieldArray({
		control,
		name: 'colors',
	})

	const { push } = useRouter()
	const productId = +queryId

	const { data } = useProductByIdQuery({
		variables: {
			id: productId,
		},
		fetchPolicy: "no-cache",
		skip: !productId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ productById }) => {
			getKeys(productById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateProduct] = useUpdateProductMutation({
		fetchPolicy: "no-cache",
		onCompleted: () => {
			push(ADMIN_PAGES.PRODUCTS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<ProductInput> = async (data) => {
		await updateProduct({
			variables: {
				id: productId,
				data,
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		data,
		sizes,
		colors,
	}
}
