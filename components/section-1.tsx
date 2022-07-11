import Image from 'next/image';
import Link from 'next/link';
const SectionOne = () => {
    return (
        <section className='py-8'>
            <div className='container mx-auto md:px-8' >
                <h1 className='font-semibold text-center text-4xl pb-8 -pt-8' >Trending</h1>
                {Slide()}
            </div>
        </section>
    )
}
export default SectionOne;

const Slide = () => {
    return (
        <div className='grid md:grid-cols-2 mx-8' >
            <div className='image'>
                <Link href={'/'} >
                    <a>
                        <Image src={'/images/img1.jpg'} width={400} height={400} />
                    </a>
                </Link>
            </div>
            <div className='info flex justify-center flex-col' >
                <div className="category">
                    <Link href={'/'}><a className='text-orange-400 hover:text-orange-600 text-sm' >Travel Category</a></Link>
                    <Link href={'/'}><a className='text-gray-400 hover:text-gray-600 text-xs ml-2' > -July 3 ,2022</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} ><a className='text-2xl md:text-5xl font-semibold text-gray-800 hover:text-gray-600 ' >Your most unhappy Customer are the greatest source of earning </a></Link>
                </div>
                <p className='text-sm md:text-md py-3 mx-1 xl:text-lg' >
                    When it comes to customer feedback, bad news is good news. To encourage customers to come to you, tell them, “If you have bad news, tell me. If you have good news, tell the whole world.” Take the bad news and make use of it in your product development.                </p>
            </div>
        </div>
    )
}
