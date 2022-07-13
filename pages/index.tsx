import type { NextPage } from 'next'
import Category from '../components/Category'
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
      <Category />
      <div>
        hi
      </div>
    </Structure>
  )
}

export default Home
