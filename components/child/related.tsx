import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Author from './author';
import fetcher from '../../utils/fetcher';
import LazyDisplay from './lazy-display';
import Error from './error';
import { Data } from '../../typings';


const Related = () => {
    const { data, isLoading, isError }: { data: Data[]; isLoading: boolean; isError: boolean } = fetcher('api/posts/')
    if (isLoading) return <LazyDisplay />
    if (isError) return <Error />
    return (
        <section className='pt-20 mx-auto'>
            <h1 className='font-bold text-3xl py-10 text-gray-700 px-12'>Related</h1>
            <div className="flex flex-col gap-6">
                {
                    data.map(
                        (value, idx) => (
                            <RelatePost {...value} key={idx} />
                        )
                    )
                }
            </div>
        </section>
    )
}



export default Related;

const RelatePost = (data: Data) => {
    const { author } = data
    return (
        <div className=" flex gap-5">
            <div className="images flex flex-col justify-start">
                <Link href={`/posts/${data.id}`} >
                    <a>
                        <Image src={`${data.img}` || '/'} width={380} height={250} className='rounded-md' />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                    <a className='text-orange-400 hover:text-orange-600 text-xs' >{data.category}</a>
                    <a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > - {data.published}</a>
                </div>
                <div className="title">
                    <Link href={`/posts/${data.id}`} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >{data.title}</a></Link>
                </div>
                <Author author={author} ></Author>
            </div>
        </div>
    )
}