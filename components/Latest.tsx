import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';


const Latest = () => {
    return (
        <section className="container mx-auto md:px-20 py-10 pt-3">
            <h1 className='font-semibold text-center text-3xl pb-4 text-gray-400' >Latest Post</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                {Posts()}
                {Posts()}
                {Posts()}
            </div>
        </section>
    )
}

export default Latest;

const Posts = () => {
    return (
        <div className='item mx-8 pt-0 items-center' >
            <div className="images mx-auto">
                <Link href={'/'} >
                    <a>
                        <Image src={'/images/img1.jpg'} width={300} height={260} className='rounded' />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={'/'}><a className='text-orange-400 hover:text-orange-600 text-sm' >Travel Category</a></Link>
                    <Link href={'/'}><a className='text-gray-400 hover:text-gray-600 text-xs ml-2' > -July 3 ,2022</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} ><a className='text-lg font-bold text-gray-800 hover:text-gray-600 leading-snug' >Your most unhappy Customer are the greatest source of earning </a></Link>
                </div>
                <p className='text-sm' >
                    When it comes to customer feedback, bad news is good news. To encourage customers to come to you, tell them,
                    “If you have bad news, tell me. If you have good news, tell the whole world.” Take the bad news and make use
                    of it in your product development.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}