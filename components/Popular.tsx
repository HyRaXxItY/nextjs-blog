import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import Link from 'next/link';
import Image from 'next/image';
import Author from './child/Author';

const Popular = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
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
                <SwiperSlide>{popular()}</SwiperSlide>
                <SwiperSlide>{popular()}</SwiperSlide>
                <SwiperSlide>{popular()}</SwiperSlide>
                <SwiperSlide>{popular()}</SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Popular;

const popular = () => {
    return (
        <div className='grid grid-cols-2 items-center' >
            <div className="images mx-auto m-2 px-3">
                <Link href={'/'} >
                    <a>
                        <Image src={'/images/img1.jpg'} width={500} height={400} className='rounded mx-auto max-h-full justify-center' />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4 m-2">
                <div className="category">
                    <Link href={'/'}><a className='text-orange-400 hover:text-orange-600 text-xs' >Travel Category</a></Link>
                    <Link href={'/'}><a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > -July 3 ,2022</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >Your most unhappy Customer are the greatest source of earning </a></Link>
                </div>
                <p className='text-xs' >
                    When it comes to customer feedback, bad news is good news. To encourage customers to come to you, tell them,
                    “If you have bad news, tell me. If you have good news, tell the whole world.” Take the bad news and make use
                    of it in your product development.
                </p>
                <Author></Author>
            </div>
        </div>
    );
}