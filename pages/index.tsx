import type { NextPage } from 'next'
import Latest from '../components/Latest'
import Popular from '../components/Popular'
import Trending from '../components/Trending'
import Structure from '../layout/structure'

const Home: NextPage = () => {
  return (
    <Structure>
      <Trending />
      <Latest />
      <Popular />
    </Structure>
  )
}

export default Home
