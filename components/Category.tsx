import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';
import fetcher from '../utils/fetcher';
import LazyDisplay from './child/lazy-display';
import Error from './child/error';
import { Data } from '../typings';


const Category = () => {
    const { data, isError, isLoading } = fetcher('api/category')
    if (isLoading) return <LazyDisplay />
    if (isError) return <Error />
    const travel: Data[] = data.filter((data: Data) => data.category === "Travel")
    const business: Data[] = data.filter((data: Data) => data.category === "Business")

    return (
        <section className="container py-8 my-0 mx-auto md:px-20">
            <div className="grid lg:grid-cols-2 w-full">
                <div className='item'>
                    <h1 className='font-semibold text-gray-500 text-xl flex-start py-12 pl-4'>Travel</h1>
                    <div className='flex flex-col gap-5' >
                        {
                            travel.map((el, idx) => (
                                <Posts key={idx} {...el} />
                            ))
                        }
                    </div>
                </div>
                <div className='item'>
                    <h1 className='font-semibold text-gray-500 text-xl flex-start py-12 pl-4'>Business</h1>
                    <div className='flex flex-col gap-5' >
                        {
                            business.map((el, idx) => (
                                <Posts key={idx} {...el} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;

const Posts = (data: Data) => {
    const { author } = data
    return (
        <div className=" flex gap-5">
            <div className="images flex flex-col justify-start">
                <Link href={`/posts/${data.id}`} >
                    <a>
                        <Image src={`${data.img}` || '/'} width={350} height={220} className='rounded-md' />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                    <a className='text-orange-400 hover:text-orange-600 text-xs' >{data.category}</a>
                    <a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > -{data.published}</a>
                </div>
                <div className="title">
                    <Link href={`/posts/${data.id}`} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >{data.title} </a></Link>
                </div>
                <Author author={author} ></Author>
            </div>
        </div>
    )
}