import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FooterLinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
]

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-3 pb-20 pt-5">

                    {/* footer left company details  */}
                    <div className="py-8 px-4">
                        <Link to={'/'} className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>AARASHOP</Link>
                        <p className='text-gray-600 lg:pr-24 pt-3 dark:text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas? Eaque expedita nam beatae iste nisi inventore ipsum autem rerum.</p>
                        <p className='text-gray-500 mt-4 dark:text-white/50'>Made with ❤️ by Aadhil</p>
                    </div>

                    {/* footer links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        {/* important links section  */}
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className="spacy-y-3">
                                {FooterLinks.map((data, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={data.link} className='text-gray-600 hover:text-black dark:hover:text-white duration-300 leading-8'>
                                                {data.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* quick links Section  */}
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className="spacy-y-3">
                                {FooterLinks.map((data, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={data.link} className='text-gray-600 hover:text-black dark:hover:text-white duration-300 leading-8'>
                                                {data.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* company address  */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <div>
                                <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Doha, Qatar</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+974 33227738</p>
                                </div>
                            </div>

                            {/* social links  */}
                            <div className="flex items-center gap-6 mt-10">
                                <Link to={'/'}>
                                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                </Link>
                                <Link to={'/'}>
                                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                </Link>
                                <Link to={'/'}>
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer