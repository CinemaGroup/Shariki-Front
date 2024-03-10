import '@/assets/styles/global.scss'
import { SITE_EMAILS, SITE_NAME, SITE_URL } from '@/constants/seo.constants'
import MainProvider from '@/providers/MainProvider'
import cn from 'clsx'
import type { Metadata } from 'next'
import { Roboto_Flex, Roboto_Mono, Roboto_Serif } from 'next/font/google'

const robotoMono = Roboto_Mono({
	weight: ['700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-roboto-mono',
	display: 'swap',
})
const robotoSerif = Roboto_Serif({
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-roboto-serif',
	display: 'swap',
})
const robotoFlex = Roboto_Flex({
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-roboto-flex',
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	metadataBase: new URL(SITE_URL),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: SITE_EMAILS,
	},
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={cn(
					robotoFlex.variable,
					robotoMono.variable,
					robotoSerif.variable
				)}
			>
				<MainProvider>
					{children}
					<div id="modal"></div>
				</MainProvider>
			</body>
		</html>
	)
}
