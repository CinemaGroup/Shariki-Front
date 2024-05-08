import StaticImage from '@/components/ui/common/image/StaticImage'
import { isNewest } from '@/utils/helpers/is-newest.util'
import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductTop: FC<IProductProps> = ({ product }) => {
	return (
		<div className={styles.top}>
			{product.types.length > 0 && (
				<div className={styles.types}>
					{product.types.map((type, index) => (
						<div className={styles.type} key={index}>
							<StaticImage
								className="w-auto h-auto"
								src={type.iconPath}
								width={0}
								height={0}
								sizes="100vw"
								alt="Type"
							/>
						</div>
					))}
				</div>
			)}
			{product.oldPrice && <div className={styles.sale}>АКЦИЯ</div>}
			{isNewest(product.createdAt) && (
				<div className={styles.newest}>НОВИНКА</div>
			)}
		</div>
	)
}

export default ProductTop
