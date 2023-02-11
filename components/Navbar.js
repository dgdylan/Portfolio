import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const currentPath = router.pathname

    // Styles
    const activeLink = "text-darkBlue bg-white px-4 py-2"
    const normalLink = "text-white"

    return (
        <nav className='container mx-auto mt-6 flex flex-row items-center justify-between text-white'>
            <Link href="/">
                <img src='/logo.png' className='max-w-xs w-16' />
            </Link>

            <ul className='flex flex-row font-bold gap-6 justify-center'>
                <li>
                    <Link className={currentPath === '/' ? activeLink : normalLink} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={currentPath === '/projects' ? activeLink : normalLink} href='#'>Projects</Link>
                </li>
                <li>
                    <Link className={currentPath === '/about' ? activeLink : normalLink} href='#'>About Me</Link>
                </li>
                <li>
                    <Link className="text-darkBlue bg-themePurple px-4 py-2" href='#'>Contact Me</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar