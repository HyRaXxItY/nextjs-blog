import Link from 'next/link'
import { FaDiscord, FaGithub, FaFacebook } from 'react-icons/fa';
import Newsletter from './child/newsletter';

function Footer() {
    return (
        <footer className="bg-gray-200">
            <Newsletter />
            <div className="container mx-auto flex justify-center py-12 pb-4">
                <div className="py-5">
                    <div className="flex gap-5 justify-center">
                        <Link href={'/'}>
                            <a>
                                <FaDiscord />
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a>
                                <FaGithub />
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a>
                                <FaFacebook />
                            </a>
                        </Link>
                    </div>
                    <p className='pt-4 text-gray-600' >Made with 💖 by <span className='text-lg font-bold text-[#ff9326]' >Noru</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer