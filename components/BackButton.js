import Link from 'next/link'
import { FaChevronCircleLeft } from 'react-icons/fa'

export default function BackButton({to}) {
    return (
        <div className="">
            <Link href={to}>
        <a className="">
         <FaChevronCircleLeft className="text-5xl"/> Go Back
         </a>
      </Link>
       </div>
    )
}
