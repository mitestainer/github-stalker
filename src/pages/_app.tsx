import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import NextNProgress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Github Stalker</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="theme-color" content="#5f49ca" />
        <meta
          name="description"
          content="Let's stalk some organization's cool repos!"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NextNProgress
          color="#5f49ca"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
