import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Author from './author';


const Related = () => {
    return (
        <section className='pt-20 mx-auto w-3/4'>
            <h1 className='font-bold text-3xl py-10 text-gray-700 px-12'>Related</h1>
            <div className="flex flex-col gap-6">
                {relate()}
                {relate()}
                {relate()}
                {relate()}
            </div>
        </section>
    )
}



export default Related;

const relate = () => {
    return (
        <div className=" flex gap-5">
            <div className="images flex flex-col justify-start">
                <Link href={'/'} >
                    <a>
                        <Image src={'/images/img1.jpg'} width={200} height={200} className='rounded-md' />
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