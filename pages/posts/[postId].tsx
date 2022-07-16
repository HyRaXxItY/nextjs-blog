import Image from 'next/image';
import Author from '../../components/child/author';
import Related from '../../components/child/related';
import Structure from '../../layout/structure';
import getPost from '../../utils/seeder';
import fetcher from '../../utils/fetcher';
import LazyDisplay from '../../components/child/lazy-display';
import Error from '../../components/child/error';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';


const Page = ({ fallback }) => {
    const router = useRouter()
    const { postId } = router.query
    const { data, isLoading, isError } = fetcher(`api/posts/${postId}`)
    if (isLoading) return <LazyDisplay />
    if (isError) return <Error />
    console.log(data)
    return (
        <SWRConfig value={{ fallback }} >
            <Article data={data} />
        </SWRConfig>
    )
}

const Article = ({ data }) => {
    return (
        <Structure>
            <section className="container w-5/6 mx-auto md:px-20 py-12">
                <div className="flex justify-center -pb-12">
                    <Author />
                </div>
                <div className="post pb-10 -m-1">
                    <h1 className='text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pb-6 mx-auto w-4/6 leading-[2rem]' >
                        {data.title}
                    </h1>
                    <p className='pb-8 w-5/6 mx-auto text-center' >{data.subtitle}</p>
                    <div className="pb-10 justify-center text-center mx-auto -mt-4">
                        <Image src={`${data.img}` || "/"} width={750} height={470} loading="eager"
                            className='mx-auto align-center items-center rounded-md' />
                    </div>
                    <div className="content text-gray-600 text-sm md:text-base lg:text-lg flex flex-col gap-4">
                        <p>
                            {data.description}
                        </p>
                    </div>
                </div>
                {/* <Related /> */}
            </section>
        </Structure>
    )
}

export default Page;

export async function getStaticProps({ params }) {
    const posts = await getPost(params.postId)

    return {
        props: {
            fallback: {
                '/api/posts': posts
            }
        }

    }
}

export async function getStaticPaths() {
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}