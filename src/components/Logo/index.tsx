import Image from 'next/image'
import * as S from './styles'

const Logo = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          src="/img/octocat-detective.png"
          alt="Github Octocat dressed as a detective"
          height={350}
          width={350}
        />
      </S.ImageWrapper>
      <S.Title>Github stalker</S.Title>
    </S.Wrapper>
  )
}

export default Logo
