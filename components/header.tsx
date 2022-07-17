import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { GoBrowser } from 'react-icons/go'
import ProgressBar from './progress-bar';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <header className={`${isScrolled && 'bg-[#ffffff]'} bg-gray-200 sticky top-0 !w-screen z-10`}>
            <div className='flex flex-col items-center sm:flex-row  sm:justify-between text-center py-3 xl:container xl:mx-auto '>
                <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center pb-4 sm:py-0 pl-4' >
                    <input type='text' placeholder='Search...' className='text-input' />
                </div>
                <div className='shrink w-80 sm:order-2 ' >
                    <Link href={'/'}>
                        <a className='font-sora text-2xl md:text-3xl font-bold' >DESIGN</a>
                    </Link>
                </div>
                <div className='w-96 order-3 flex justify-center' >
                    <div className='flex gap-4 md:gap-6 '>
                        <Link href={'/'}>
                            <a href='' >
                                <div data-tooltip-target="tooltip-bottom" className="tooltip mb-2 md:mb-0 text-white bg-blue-100 font-medium rounded-full text-sm  px-5 py-2.5 text-center hover:bg-transparent relative inline-block">
                                    <FaDiscord data-tooltip-target="tooltip-default" color='#555' className='h-6 w-6 hover:fill-[#5865F2]' />

                                    <span className='tooltiptext' >Discord</span>
                                </div>
                            </a>

                        </Link>

                        <Link href={'/'}>
                            <a href=''>
                                <div className="tooltip mb-2 md:mb-0 text-white bg-[#ffc3d6] rounded-full text-sm px-5 py-2.5 text-center hover:bg-transparent">
                                    <FaFacebook color='#555' className='h-6 w-6 hover:fill-[#ff407c]' />
                                    <span className="tooltiptext">facebook</span>
                                </div>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a href=''>
                                <div className="tooltip mb-2 md:mb-0 text-white bg-[#c5ffe4] rounded-full text-sm px-5 py-2.5 text-center hover:bg-transparent">
                                    <FaGithub color='#555' className='h-6 w-6 hover:fill-[#31ff9f]' />
                                    <span className="tooltiptext">Github</span>
                                </div>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a href=''>
                                <div className="tooltip mb-2 md:mb-0 text-white bg-[#dcc3ff] rounded-full text-sm px-5 py-2.5 text-center hover:bg-transparent">
                                    <GoBrowser color='#555' className='h-6 w-6 hover:fill-[#9933fe]' />
                                    <span className="tooltiptext">portfolio <br /> website</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <ProgressBar />
        </header>

    )
}

export default Header;