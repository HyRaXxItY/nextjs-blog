import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import fetcher from '../utils/fetcher';
import LazyDisplay from './child/lazy-display';
import Error from './child/error';

const Trending = () => {
    const { data, isError, isLoading } = fetcher('api/trending')
    if (isLoading) return <LazyDisplay />
    if (isError) return <Error />
    SwiperCore.use([Autoplay])
    return (
        <section className='py-8 pt-3' >
            <div className='container mx-auto md:px-8' >
                <h1 className='font-semibold text-center text-3xl pb-4 text-gray-400' >Trending Now</h1 >
                <Swiper
                    slidesPerView={1}
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
            </div >
        </section >
    )
}
export default Trending;

const Slide = ({ data }) => {
    return (
        <div className='grid md:grid-cols-2 mx-8 pt-0 items-center' >
            <div className='image justify-center px-4 mx-auto'>
                <Link href={'/'} >
                    <a>
                        <Image src={`${data.img}` || "/"} width={400} height={400} className='rounded-xl' />
                    </a>
                </Link>
            </div>
            <div className='info flex justify-center flex-col' >
                <div className="category">
                    <Link href={'/'}><a className='text-orange-400 hover:text-orange-600 text-sm' >{data.category}</a></Link>
                    <Link href={'/'}><a className='text-gray-400 hover:text-gray-600 text-xs ml-2' > - {data.published}</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} ><a className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 hover:text-gray-600 leading-[2.7rem] lg:leading-[3.4rem]' >{data.title} </a></Link>
                </div>
                <p className='text-sm md:text-md py-3 mx-1 xl:text-lg' >
                    {data.description}
                </p>
                <Author></Author>
            </div>
        </div>
    )
}
