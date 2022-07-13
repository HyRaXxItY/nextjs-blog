import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';

const Category = () => {
    return (
        <section className="container py-16 mx-auto md:px-20 ">
            <div className="grid lg:grid-cols-2">
                <div className='item'>
                    <h1 className='font-semibold text-gray-500 text-xl flex-start py-12'>Bussiness</h1>
                    <div className='flex flex-col gap-5' >
                        {posts()}
                        {posts()}
                        {posts()}
                        {posts()}
                    </div>
                </div>
                <div className='item'>
                    <h1 className='font-semibold text-gray-500 text-xl flex-start py-12'>Travel</h1>
                    <div className='flex flex-col gap-5' >
                        {posts()}
                        {posts()}
                        {posts()}
                        {posts()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;

const posts = () => {
    return (
        <div className=" flex gap-5">
            <div className="images flex flex-col justify-start">
                <Link href={'/'} >
                    <a>
                        <Image src={'/images/img1.jpg'} width={250} height={220} className='rounded-md' />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                    <Link href={'/'}><a className='text-orange-400 hover:text-orange-600 text-xs' >Travel Category</a></Link>
                    <Link href={'/'}><a className='text-gray-400 hover:text-gray-600 text-xxs ml-2' > -July 3 ,2022</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >Your most unhappy Customer are the greatest source of earning </a></Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}