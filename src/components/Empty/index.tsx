import Image from 'next/image'
import * as S from './styles'

const Empty = () => {
  return (
    <>
      <S.Wrapper>
        <Image
          src="/img/empty.svg"
          alt="Empty box"
          layout="fill"
          objectFit="cover"
        />
      </S.Wrapper>
      <S.Text>This organization has no repositories to show.</S.Text>
    </>
  )
}

export default Empty
