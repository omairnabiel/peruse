import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

import Head from 'next/head'
import {RecoilRoot} from 'recoil'
import {AppProps} from 'next/app'

import {Modal} from 'components'

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
			</Head>
			<RecoilRoot>
				<Component {...pageProps} />
				<Modal />
			</RecoilRoot>
		</>
	)
}

export default MyApp
