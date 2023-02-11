import React from 'react'
import Link from 'next/link'

const Hero = () => {
    
    return (
        <div>
            <div className='container mx-auto mt-48'>
                <h1 className='text-white text-7xl font-bold leading-[0.85em]'>
                    Dylan
                    <br />
                    Rambarran<span className='text-cyan-200'>.</span>
                </h1>
                <div className="flex flex-row items-center gap-6 mt-2">
                    <p className='text-2xl font-bold text-cyan-200'>
                        Software Engineer
                    </p>
                    <div>
                        {Divider('#A5F3FC')}
                    </div>
                </div>
                <div className="flex flex-row gap-2 mt-4 font-bold text-darkBlue">
                    <Link className='text-darkBlue bg-white px-4 py-2' href='/'>
                        Resume
                    </Link>
                    <Link className='text-white border-2 px-4 py-2' href='/'>
                        Test
                    </Link>
                </div>
            </div>

            <div className='bg-white mt-48'>
                <div className="container mx-auto py-6 font-bold">
                    <h2 className='text-2xl text-darkBlue mb-2'>
                        About Me
                    </h2>
                    {Divider('#0b0916')}
                    <div className="container h-auto bg-darkBlue mt-8 text-white flex">
                        <img className='object-cover max-w-xs' src="/pfp.jpg" alt="" />
                        <div className="flex flex-col text-right gap-4 p-8">
                            <h2 className='text-5xl'>Software Engineer</h2>
                            <p className='font-medium'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nulla vitae mi finibus malesuada. Integer tempor ornare sem ac aliquet. Maecenas hendrerit volutpat enim vitae volutpat. Sed vulputate ipsum in ex aliquam fringilla.
                            </p>
                            <div className="flex flex-row text-right items-center gap-6 mt-2 justify-end">
                                <p className='text-2xl font-bold text-themePurple'>
                                    Software Engineer
                                </p>
                                <div>
                                    {Divider('#808CFF')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero

const Divider = (color) => {
    return (
        <svg width="166" height="15" viewBox="0 0 166 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="165.687" y="14.2841" width="77.1299" height="14.2833" rx="4.64432" transform="rotate(-180 165.687 14.2841)" fill={color}/>
            <rect x="81.891" y="14.284" width="22.8533" height="14.2833" rx="4.64432" transform="rotate(-180 81.891 14.284)" fill={color}/>
            <rect x="52.3722" y="14.284" width="22.8533" height="14.2833" rx="4.64432" transform="rotate(-180 52.3722 14.284)" fill={color}/>
            <rect x="21.9011" y="14.284" width="21.9011" height="14.2833" rx="4.64432" transform="rotate(-180 21.9011 14.284)" fill={color}/>
        </svg>
    )
}
