import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Author = () => {
    return (
        <div className='author flex pb-5 ' >
            <Image src={'/images/author/author1.jpg'} width={48} height={48} className='rounded-full'></Image>
            <div className="flex flex-col justify-center px-4">
                <Link href={'/'}>
                    <a className='font-sora text-xs font-medium text-gray-800 hover:text-gray-600'>
                        John Doe
                    </a>
                </Link>
                <span className='text-xxs'>CEO, sabu siddik </span>
            </div>
        </div>
    )
}

export default Author