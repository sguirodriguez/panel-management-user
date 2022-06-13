import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { Global } from '@emotion/react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { ToastProvider } from 'react-toast-notifications'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gerenciamento de Usuários</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
      </Head>
      <ToastProvider autoDismiss={true} autoDismissTimeout={4000}>
        <Component {...pageProps} />
        <Global styles={GlobalStyle} />
      </ToastProvider>
    </>
  )
}

export default MyApp
