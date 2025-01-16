import { MdOutlineNightlight } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


const Footer = () => {
    return (
      <div className='container mx-auto py-5 fixed bottom-0 '>
      <div className=' grid grid-cols-3 gap-9 px-20 space-x-0 '>
          
            <div className="text-white px-4 "><MdOutlineNightlight /></div>
          
          <a href='https://iios.netlify.app/' target=''>
            <div className="text-white px-4"><FaRegSquare /></div>
          </a>
          
            <div className="text-white px-4 "><IoIosArrowBack /></div>
          
      </div>
      </div>
    )
  }
  
  export default Footer