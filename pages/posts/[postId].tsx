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


export default function Page({ fallback }) {

    const router = useRouter()
    const { postId } = router.query;
    const { data, isLoading, isError } = fetcher(`api/posts/${postId}`)

    if (isLoading) return <LazyDisplay></LazyDisplay>
    if (isError) return <Error></Error>

    return (
        <SWRConfig value={{ fallback }}>
            <Article {...data}></Article>
        </SWRConfig>
    )

}

function Article(data) {
    const { author } = data
    return (
        <Structure>
            <section className='container mx-auto md:px-20 py-12 w-5/6'>
                <div className='flex justify-center -pb-12'>
                    {author ? <Author {...author}></Author> : <></>}
                </div>
                <div className="post pb-10 -m-1">
                    <h1 className='text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pb-6 mx-auto w-4/6 leading-[2.2rem]'>
                        {data.title || "No Title"}
                    </h1>
                    <p className='text-gray-500 pb-8 w-5/6 mx-auto text-center -mt-4'>
                        {data.subtitle || "No Title"}
                    </p>
                    <div className="pb-10 justify-center text-center mx-auto -mt-4">
                        <Image src={`${data.img}` || "/"} width={970} height={560} loading="eager"
                            className='mx-auto align-center items-center rounded-md'></Image>
                    </div>
                    <div className="content text-gray-600 text-sm md:text-base lg:text-lg flex flex-col gap-4">
                        <p>
                            {data.description || "No Description"}
                        </p>
                    </div>
                </div>
                <Related></Related>
            </section>
        </Structure>
    )
}


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