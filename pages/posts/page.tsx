import Image from 'next/image';
import Author from '../../components/child/author';
import Related from '../../components/child/related';
import Structure from '../../layout/structure';
const Page = () => {
    return (
        <Structure>
            <section className="container w-5/6 mx-auto md:px-20 py-12">
                <div className="flex justify-center -pb-12">
                    <Author />
                </div>
                <div className="post pb-10 -m-1">
                    <h1 className='text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pb-6 mx-auto w-4/6 leading-[2rem]' >
                        Lorem ipsum dolor sit amet consectetur, Nesciunt voluptates nemo
                    </h1>
                    <div className="pb-10 justify-center text-center mx-auto -mt-4">
                        <Image src={'/images/img1.jpg'} width={600} height={500} loading="eager"
                            className='mx-auto align-center items-center' />
                    </div>
                    <div className="content text-gray-600 text-sm md:text-base lg:text-lg flex flex-col gap-4">
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur

                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetu
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
                <Related />
            </section>
        </Structure>
    )
}

export default Page;