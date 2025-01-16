import { RxHamburgerMenu } from "react-icons/rx"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { IoPencil } from "react-icons/io5"
import ContactMe from "../components/ContactMe"



const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className="py-3">
            <nav className="fixed py-7 w-full z-11"> {/* Added background color for visibility */}
                        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-between items-center h-10">
                            <div className="flex items-center">
                                <button className="text-white px-5 text-2xl ">
                                <RxHamburgerMenu /> 
                                </button>
                                <p className="text-orange-300 font-bold">Contact</p>
                            </div>
                            <div className="flex items-center space-x-1"> {/* Aligns items to the right and adds spacing */}
                                <div className="text-white px-2 py-2 rounded-md font-medium">
                                    <button className="bg-gray border-radius text-2xl">
                                    <IoPencil />
                                    </button>
                                </div>
                            </div>
                        </div>
                </nav>
        </div>
        <div className="py-14">
            <ContactMe />
            <Footer />
        </div>
    </div>
  )
}

export default Contact