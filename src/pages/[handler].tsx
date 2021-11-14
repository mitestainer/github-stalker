import { GetServerSideProps } from 'next'
import Organization, { OrganizationProps } from 'templates/Organization'
import { mock, cardsMock } from 'templates/Organization/mock'

export default function OrganizationPage(props: OrganizationProps) {
  return <Organization {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    ...mock,
    cardsMock
  }
  return {
    props: {
      data
    }
  }
}
