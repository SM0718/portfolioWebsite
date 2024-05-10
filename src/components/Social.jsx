import React from 'react'
import SocialIcons from './SocialIcons'

function Social() {

    const socials = [
       { 
        img: './facebook.png',
        link: "https://www.facebook.com/sagnik.majumder.167/",
    },
    { 
        img: './instagram.png',
        link: "https://www.instagram.com/sagnix__/",
    },
    { 
        img: './linkedin.png',
        link: "https://www.linkedin.com/in/sagnik-majumder-bbbb96200/",
    },
    { 
        img: './github.png',
        link: "https://github.com/SM0718",
    },
    { 
        img: './twitter.png',
        link: "https://twitter.com/Sagnik89501349",
    },

]

  return (
    <div className='flex gap-4'>
        {
            socials.map(items => <SocialIcons className={"size-10"} img={items.img} link={items.link}/>)
        }
        
    </div>
  )
}

export default Social