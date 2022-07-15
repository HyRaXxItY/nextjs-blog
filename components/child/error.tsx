import Image from 'next/image'
const Error = () => {
    return (
        <div className="text-center py-10">
            <h1 className="text-center mx-auto text-2xl text-orange-400">
                Something went wrong
            </h1>
            <Image src={'/images/not_found.png'} width={400} height={450}></Image>
        </div>
    )
}

export default Error