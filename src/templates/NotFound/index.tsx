import { Container } from 'components/Container'
import SearchBar from 'components/SearchBar'
import Image from 'next/image'
import * as S from './styles'

const NotFound = () => {
  return (
    <S.Page>
      <Container>
        <S.Wrapper>
          <S.Title>It happens in the best of families...</S.Title>
          <Image
            src="/img/404.svg"
            alt="404 - Not found"
            height={200}
            width={200}
          />
          <p>
            {`Seems this organization doesn't exist! Try searching for another one:`}
          </p>
          <SearchBar />
        </S.Wrapper>
      </Container>
    </S.Page>
  )
}

export default NotFound
