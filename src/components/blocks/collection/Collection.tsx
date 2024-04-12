import StaticImage from '@/components/ui/common/image/StaticImage'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { TypeCollection } from '@/shared/types/collection/collection.interface'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Collection.module.scss'

const Collection: FC<{ collection: TypeCollection } & IClassName> = ({
	collection,
	className,
}) => {
	return (
		<div className={styles.collection}>
			<Link
				className={cn(styles.collection, className && className)}
				href="/catalog"
			>
				{collection.imagePath && (
					<StaticImage
						className={styles.image}
						src={collection.imagePath}
						width={0}
						height={0}
						sizes="100vw"
						alt={collection.name}
					/>
				)}
				{collection.name && <h3 className={styles.name}>{collection.name}</h3>}
			</Link>
		</div>
	)
}

export default Collection
