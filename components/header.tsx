import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
const Header = () => {
    return (
        <header className='bg-gray-50'>
            <div className='flex flex-col items-center sm:flex-row  sm:justify-between text-center py-3 xl:container xl:mx-auto '>
                <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0' >
                    <input type='text' placeholder='Search...' className='text-input' />
                </div>
                <div className='shrink w-80 sm:order-2 ' >
                    <Link href={'/'}>
                        <a className='text-3xl font-extrabold' >DESIGN</a>
                    </Link>
                </div>
                <div className='w-96 order-3 flex justify-center' >
                    <div className='flex gap-6'>
                        <Link href={'/'}>
                            <a href=''>
                                <FaDiscord color='#444' className='hover:fill-[#5865F2]' />
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a href=''>
                                <FaFacebook color='#444' className='hover:fill-[#c93665]' />
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a href=''>
                                <FaTwitter color='#444' className='hover:fill-[#22c579]' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;