import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import { FiSearch } from 'react-icons/fi'
import * as S from './styles'

export type SearchBarProps = {
  withLogo?: boolean
}

const SearchBar = ({ withLogo = false }: SearchBarProps) => {
  const [handle, setHandle] = useState('')
  const router = useRouter()

  useEffect(() => {
    setHandle('')
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (handle) router.push(`/${handle}`)
  }

  return (
    <S.Wrapper withLogo={withLogo}>
      {withLogo && (
        <Link href="/">
          <a>🕵️</a>
        </Link>
      )}
      <form onSubmit={handleSubmit}>
        <S.InputField
          placeholder="Type an org's name"
          onChange={(e) => setHandle(e.target.value)}
          value={handle}
          type="text"
        />
        <Button disabled={!handle.length} aria-label="search">
          <FiSearch />
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default SearchBar
