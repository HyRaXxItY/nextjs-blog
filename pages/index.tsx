import type { NextPage } from 'next'
import SectionOne from '../components/section-1'
import Structure from '../layout/structure'

const Home: NextPage = () => {
  return (
    <Structure>
      <SectionOne />
    </Structure>
  )
}

export default Home
