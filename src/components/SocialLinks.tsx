import Link from 'next/link'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FiTwitter, FiMail } from 'react-icons/fi'
import { FaYoutube, FaGithub  } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";


export default function SocialLinks() {
  return (
    <div className="w-fit grid grid-cols-3 gap-4 pt-4 tracking-tight md:flex md:flex-row md:items-start">

      <Link
        href="https://www.linkedin.com/in/samandar-m/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <SiLinkedin className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">linkedin</span>
      </Link>

      <Link
        href="https://github.com/MirjalilovS"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FaGithub className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">github</span>
      </Link>

      <Link
        href="mailto:mirjalilovs@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FiMail className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">email</span>
      </Link>

      <Link
        href="/Samandar_Mirjalilov_CV.pdf"
        download
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <HiOutlineDocumentText className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">my cv</span>
      </Link>
    </div>
  )
}
