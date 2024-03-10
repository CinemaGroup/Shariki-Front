'use client'

import { useState, type FC, type PropsWithChildren } from 'react'
import type { ICallBtn } from './interface/call-btn.interface'

const CallBtn: FC<PropsWithChildren<ICallBtn>> = ({ className, children }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<button className={className && className} onClick={() => setIsShow(true)}>
			{children}
		</button>
	)
}

export default CallBtn
