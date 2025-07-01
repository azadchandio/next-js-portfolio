import Link from "next/link"

import {FaGithub,FaLinkedinIn,FaYoutube,FaTwitter} from "react-icons/fa"

const socials = [
    {icon:<FaGithub/>,path:"https://github.com/azadchandio"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/azad-chandio/"},
    // {icon:<FaYoutube/>,path:""},
    {icon:<FaTwitter/>,path:"https://x.com/Azadchandio69"},
];
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
            <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>{item.icon}</Link>
        )
        })}
    </div>
  )
}

export default Social