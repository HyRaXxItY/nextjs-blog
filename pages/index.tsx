import type { NextPage } from 'next'
import Trending from '../components/Trending'
import Structure from '../layout/structure'

const Home: NextPage = () => {
  return (
    <Structure>
      <Trending />
    </Structure>
  )
}

export default Home
