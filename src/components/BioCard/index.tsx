import Image from 'next/image'
import { FiGlobe, FiMapPin, FiExternalLink } from 'react-icons/fi'
import * as S from './styles'

type BioCardProps = {
  name: string
  avatar: string
  description?: string
  location?: string
  website?: string
}

const BioCard = ({
  name,
  avatar,
  description,
  location,
  website
}: BioCardProps) => {
  return (
    <S.Wrapper>
      <S.Avatar>
        <Image src={avatar} alt={name} layout="fill" objectFit="cover" />
      </S.Avatar>
      <S.Title>{name}</S.Title>
      {!!description && (
        <S.Description aria-label="description">{description}</S.Description>
      )}
      {!!location && (
        <S.Location>
          <FiMapPin aria-label="location" />
          {location}
        </S.Location>
      )}
      {!!website && (
        <S.Website>
          <FiGlobe aria-label={`${name}'s website`} />
          <a href={website} target="_blank" rel="noreferrer">
            <span>Website</span>
            <FiExternalLink />
          </a>
        </S.Website>
      )}
    </S.Wrapper>
  )
}

export default BioCard
