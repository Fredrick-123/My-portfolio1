"use cleint"

import  Link from  "next/link"
 import {FaGithub , FaLinkedinIn , FaYoutube , FaTwitter } from "react-icons/fa"


 const socials = [
    {icon: <FaGithub/> , path: "https://github.com/Fredrick-123?tab=repositories"},
    {icon: <FaLinkedinIn/> , path:"https://www.linkedin.com/in/fredrick-nicholas-890682145/"},
    {icon: <FaYoutube/> , path: "https://www.youtube.com/"},
    {icon: <FaTwitter/> , path: "https://x.com/"},
 ]

const Social = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item , index)=>{
                return(
                    <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })
        }
        
    </div>
  )
}

export default Social