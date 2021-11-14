import Head from 'next/head'
import SearchBar from 'components/SearchBar'
import { Container } from 'components/Container'
import Logo from 'components/Logo'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </Head>
      <S.Page>
        <Container>
          <S.Wrapper>
            <Logo />
            <S.Subtitle>{`Let's stalk some organization's cool repos!`}</S.Subtitle>
            <SearchBar />
          </S.Wrapper>
        </Container>
      </S.Page>
    </>
  )
}

export default HomeTemplate
