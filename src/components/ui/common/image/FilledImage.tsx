import Image from 'next/image'
import type { FC } from 'react'
import type { IFilledImage } from './interface/image.interface'

const FilledImage: FC<IFilledImage> = ({
	quality = 100,
	src,
	alt,
	sizes,
	className,
}) => {
	return (
		<Image
			quality={quality}
			draggable={false}
			priority
			fill
			src={src}
			alt={alt}
			sizes={sizes}
			className={className && className}
		/>
	)
}

export default FilledImage
