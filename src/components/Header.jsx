import React, {useState} from 'react'
import 'typeface-poppins';
import Logo from './Logo.jsx'
import { NavLink } from 'react-router-dom';

function Header() {

    const [show, setShow] = useState(false)

    window.onscroll = function() {
        setShow(false)
    };
    
    const headerItems = [
        {
            name: "Home",
            slug: "/"
        },
        {
            name: "About",
            slug: "/about"
        },
        {
            name: "Education",
            slug: "/education"
        },
        {
            name: "Projects",
            slug: "/projects"
        },
        {
            name: "Contact",
            slug: "/contact"
        },
    ]

  return (
    <>
    <div className='w-full flex justify-center shadow-lg z-20'>
    <div className='w-3/4  flex justify-between z-20'>
        <div className=''>
            <Logo className={"h-20"}/>
        </div>
        <div className='lg:flex gap-10 items-center hidden'>
            {
                headerItems.map(item => <NavLink
                key={item.slug}
                to={item.slug}
                className={({isActive}) => `${isActive? "before:block before:translate-y-8  text-[#021bff]" : "before:hidden"} relative cursor-pointer font-bold text-[15.7px] font-sans hover:text-[#021bff]
                before:content-[''] before:h-[2px] before:w-full before:rounded-b-xl before:bg-[#021bff]
                before:hover:block before:absolute before:hover:transition before:hover:translate-y-8
                before:hover:ease-in-out before:hover:duration-400
                `}
                >
                    {item.name}
                </NavLink>)
            }
        </div>
        <div className={`lg:hidden flex`}>

            {
                show? <button className={`${show && "animate-[rotateRight_1s]"}`} onClick={() => setShow(!show)}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
                </svg></button>  : 
                            <button className={`${show && "animate-[rotateRight_1s]"}`} onClick={() => setShow(!show)}>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                </svg>
                 </button>
            }
        </div>
    </div>

    
        
</div>
    <div className={`${show? "flex" : "hidden"} bg-[#0e0f31] justify-center items-start h-screen md:w-[600px] sm:w-[400px] w-screen lg:hidden absolute animate-[rightIn_1s] right-0 z-30`}>
    <div className='w-full h-3/4 flex flex-col justify-evenly items-center gap-1 text-white'>
            {
                headerItems.map(item => <NavLink
                key={item.slug}
                to={item.slug}
                className={({isActive}) => `${isActive? "before:block text-[#021bff]" : "before:hidden"} text-2xl relative cursor-pointer font-bold font-sans hover:text-[#021bff]
                before:content-[''] before:h-[4px] before:w-full before:rounded-b-xl before:bg-[#021bff] before:hover:block before:absolute before:hover:animate-[comeIn_1s]
                before:-bottom-4`}
                >
                    {item.name}
                </NavLink>)
            }
        </div>
    </div>
    </>

  )
}

export default Header