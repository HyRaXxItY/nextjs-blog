import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';
import fetcher from '../utils/fetcher';
import LazyDisplay from './child/lazy-display';
import Error from '../components/child/error'
import { Data } from '../typings';

const Popular = () => {
    const { data, isError, isLoading }: { data: Data[]; isError: boolean; isLoading: boolean } = fetcher('api/popular')
    if (isLoading) return <LazyDisplay />
    if (isError) return <Error />
    return (
        <section className="container mx-auto md:px-20 py-10 pt-3">
            <h1 className='font-semibold text-center text-3xl pb-4 text-gray-400' >Most Popular</h1>
            <Swiper
                spaceBetween={60}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
            >
                {
                    data?.map((el, idx) => (
                        <SwiperSlide key={idx} >{<Slide {...el} />}</SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Popular;

const Slide = (value: Data) => {
    // return (
    //     // <div className='grid' >
    //     //     <div className="images mx-auto m-2 px-3">
    //     //         <Link href={`/posts/${data.id}`} >
    //     //             <a>
    //     //                 <Image src={`${data?.img}` || '/'} width={350} height={220} className='rounded mx-auto max-h-full justify-center' />
    //     //             </a>
    //     //         </Link>
    //     //     </div>
    //     //     <div className="info flex justify-center flex-col py-4 m-2">
    //     //         <div className="category">
    //     //             <a className='text-orange-400 hover:text-orange-600 text-xs' >{data.category}</a>
    //     //             <a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > -{data.published}</a>
    //     //         </div>
    //     //         <div className="title">
    //     //             <Link href={`/posts/${data.id}`} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >{data.title}</a></Link>
    //     //         </div>
    //     //         <p className='text-xs' >
    //     //             {data.description}
    //     //         </p>
    //     //         <Author></Author>
    //     //     </div>
    //     // </div>
    //     <div className="grid">
    //         <div className="images mx-auto m-2 p-3">
    //             <Link href={`/posts/${data.id}`}><a><Image src={`${data.img}` || ""} width={350} height={250} /></a></Link>
    //         </div>
    //         <div className="info flex justify-center flex-col py-4 m-2">
    //             <div className="category px-20">
    //                 <Link href={`/posts/${data.id}`}><a className="text-orange-600 hover:text-orange-800 text-xs">{data.category || "No Category"}</a></Link>
    //                 <Link href={`/posts/${data.id}`}><a className="text-gray-800 hover:text-gray-600 text-xxs "> - {data.published || ""}</a></Link>
    //             </div>
    //             <div className="title mx-auto w-3/4">
    //                 <Link href={`/posts/${data.id}`}><a className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600 leading-snug text-center">{data.title || "No Title"}</a></Link>
    //             </div>

    //             <p className="text-gray-500 py-3 w-3/4 mx-auto ">
    //                 {data.description || "No Description"}
    //             </p>
    //             {data.author ? <Author className='px-20' /> : <></>}

    //         </div>
    //     </div>
    // );
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
            <div className="info flex justify-center flex-col py-4 w-5/6 mx-auto text-center">
                <div className="category">
                    <a className='text-orange-400 hover:text-orange-600 text-xs' >{data.category}</a>
                    <a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > -{data.published}</a>
                </div>
                <div className="title py-2">
                    <Link href={`/posts/${data.id}`} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >{data.title}</a></Link>
                </div>
                <p className='text-sm line-clamp-3 pb-2' >
                    {data.description}
                </p>
                <Author author={author} ></Author>
            </div>
        </div>
    )
}