import type { CSSProperties } from 'react'

interface IImageProps {
	quality?: number
	src: string
	alt: string
	style?: CSSProperties
	className?: string
}

export interface IImage extends IImageProps {
	width: number
	height: number
	sizes?: string
}

export interface IFilledImage extends IImageProps {}
