import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";

const Trending = () => {
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
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                </Swiper>
            </div >
        </section >
    )
}
export default Trending;

const Slide = () => {

    return (
        <div className='grid md:grid-cols-2 mx-8 pt-0 items-center' >
            <div className='image justify-center px-4 mx-auto'>
                <Link href={'/'} >
                    <a>
                        <Image src={'/images/img1.jpg'} width={400} height={400} className='rounded-xl' />
                    </a>
                </Link>
            </div>
            <div className='info flex justify-center flex-col' >
                <div className="category">
                    <Link href={'/'}><a className='text-orange-400 hover:text-orange-600 text-sm' >Travel Category</a></Link>
                    <Link href={'/'}><a className='text-gray-400 hover:text-gray-600 text-xs ml-2' > -July 3 ,2022</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} ><a className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 hover:text-gray-600 leading-[2.7rem] lg:leading-[3.4rem]' >Your most unhappy Customer are the greatest source of earning </a></Link>
                </div>
                <p className='text-sm md:text-md py-3 mx-1 xl:text-lg' >
                    When it comes to customer feedback, bad news is good news. To encourage customers to come to you, tell them,
                    “If you have bad news, tell me. If you have good news, tell the whole world.” Take the bad news and make use
                    of it in your product development.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}
