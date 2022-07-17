const Newsletter = () => {
    return (
        <section className='bg-gray mt-20'>
            <div className='container mx-auto md:px-20 pt-16 text-center '>
                <h1 className='font-bold text-xl font-sora' >Our NewsLetter</h1>

                <div className='py-4 flex'>
                    <input type='email' className='mx-auto shadow-border rounded-xl w-6/12 p-3 text-gray-600 focus:outline-none focus:shadow-outline focus:placeholder-opacity-0 placeholder-indigo-200 placeholder:italic text-center' placeholder='example123@gmail.com' />
                </div>
                <button className='bg-orange-400 px-20 py-3 rounded-full text-white font-semibold' >
                    Subscribe
                </button>
            </div>
        </section>
    )
}

export default Newsletter