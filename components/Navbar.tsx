
import { BiAlarm } from "react-icons/bi";
import { AiOutlineSound } from "react-icons/ai";
import { CiWifiOn } from "react-icons/ci";
import { MdOutlineSignalCellularConnectedNoInternet0Bar } from "react-icons/md";
import { MdBatteryFull } from "react-icons/md";
import { FaFacebookMessenger } from 'react-icons/fa';
import Clock from "./clock";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-10"> {/* Added background color for visibility */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
                <div className="flex items-center">
                    <a href="#" className="text-white px-3 py-2 rounded-md font-medium" aria-current="page">
                        <Clock />
                    </a>
                    <div className="text-white px-0 py-2 rounded-md font-medium"><FaFacebookMessenger /></div>
                </div>
                <div className="flex items-center space-x-1"> {/* Aligns items to the right and adds spacing */}
                    <div className="text-white px-0 py-2 rounded-md font-medium"><BiAlarm /></div>
                    <div className="text-white px-0 py-2 rounded-md font-medium"><AiOutlineSound /></div>
                    <div className="text-white px-0 py-2 rounded-md font-medium"><CiWifiOn /></div>
                    <div className="text-white px-0 py-2 rounded-md font-medium"><MdOutlineSignalCellularConnectedNoInternet0Bar /></div>
                    <div className="text-white px-0 py-2 rounded-md font-medium"><MdBatteryFull /></div>
                </div>
            </div>
    </nav>
  )
}

export default Navbar