import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Author = (data) => {
    return (
        <div className='author flex pb-5' >
            <Image src={`${data.img}` || '/'} width={48} height={48} className='rounded-full'></Image>
            <div className="flex flex-col justify-center px-4">
                <Link href={'/'}>
                    <a className='font-sora text-xs font-medium text-gray-800 hover:text-gray-600'>
                        {data.name}
                    </a>
                </Link>
                <span className='text-xxs'>{data.designation} </span>
            </div>
        </div>
    )
}

export default Author