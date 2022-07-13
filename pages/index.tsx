import type { NextPage } from 'next'
import Category from '../components/category'
import Latest from '../components/latest'
import Popular from '../components/popular'
import Trending from '../components/trending'
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
