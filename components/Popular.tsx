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

const Popular = () => {
    const { data, isError, isLoading } = fetcher('api/popular')
    if (isLoading) return <LazyDisplay />
    if (isError) return <Error />
    return (
        <section className="container mx-auto md:px-20 py-10 pt-3">
            <h1 className='font-semibold text-center text-3xl pb-4 text-gray-400' >Most Popular</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={60}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {
                    data?.map((el, idx) => (
                        <SwiperSlide key={idx} >{<Slide data={el} />}</SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Popular;

const Slide = ({ data }) => {
    return (
        <div className='grid grid-cols-2 items-center' >
            <div className="images mx-auto m-2 px-3">
                <Link href={'/'} >
                    <a>
                        <Image src={`${data?.img}` || '/'} width={500} height={500} className='rounded mx-auto max-h-full justify-center' />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4 m-2">
                <div className="category">
                    <Link href={'/'}><a className='text-orange-400 hover:text-orange-600 text-xs' >{data.category}</a></Link>
                    <Link href={'/'}><a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > -{data.published}</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >{data.title}</a></Link>
                </div>
                <p className='text-xs' >
                    {data.description}
                </p>
                <Author></Author>
            </div>
        </div>
    );
}