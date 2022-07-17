import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';
import fetcher from '../utils/fetcher'
import LazyDisplay from './child/lazy-display';
import Error from '../components/child/error'
import { Data } from '../typings';

const Latest = () => {
    const { data, isError, isLoading } = fetcher('api/posts')
    if (isLoading) return <LazyDisplay />
    if (isError) return <Error />
    return (
        <section className="container mx-auto md:px-20 py-10 pt-3">
            <h1 className='font-semibold text-center text-3xl pb-4 text-gray-400' >Latest Post</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                {data.map((value, idx) => (
                    <Posts {...value} key={idx} />
                ))}
            </div>
        </section>
    )
}

export default Latest;

const Posts = (value: Data[]) => {
    const data: Data = { ...value }
    const { author } = data
    return (
        <div className='item mx-6 pt-0 items-center text-center col-start justify-start justify-items-center' >
            <div className="images mx-auto text-center">
                <Link href={`/posts/${data.id}`} >
                    <a>
                        <Image src={`${data.img}` || "/"} width={380} height={260} className='rounded' />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <a className='text-orange-400 hover:text-orange-600 text-xs' >{data.category}</a>
                    <a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > -{data.published}</a>
                </div>
                <div className="title py-2">
                    <Link href={`/posts/${data.id}`} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >{data.title}</a></Link>
                </div>
                <p className='text-sm line-clamp-3 pb-2' >
                    {data.description.slice(0, 175).concat('...')}
                </p>
                <Author author={author} ></Author>
            </div>
        </div>
    )
}