import image from '../assets/port.jpeg'

const Test = () => {
  return (
    <div className="container mx-auto py-2 ">
        <div className="grid grid-cols-1 gap-7 px-4  ">
            <div className="flex items-center"> {/* Use flexbox for horizontal alignment */}
                <img src={image} className='rounded-3xl max-w-20 mr-2'/> {/* Add margin for spacing */}
                <div className='grid grid-cols-1'>
                <p className='text-xs'>Jennifer Reynoso</p>
                <p className='text-xs text-gray-400'>Jennifer: Terrance is an Am... <span className='text-white'>11:30 AM</span></p>
                </div>
            </div>
            <div className="flex items-center"> {/* Use flexbox for horizontal alignment */}
                <img src={image} className='rounded-3xl max-w-20 mr-2'/> {/* Add margin for spacing */}
                <div className='grid grid-cols-1'>
                    <p className='text-xs'>Brandon Reynoso</p>
                    <p className='text-xs text-gray-400'>Brandon: When ever I need... <span className='text-white'>01:13 PM</span></p>
                </div>
                
            </div>
            <div className="flex items-center"> {/* Use flexbox for horizontal alignment */}
                <img src={image} className='rounded-3xl max-w-20 mr-2'/> {/* Add margin for spacing */}
                <div className='grid grid-cols-1'>
                    <p className='text-xs'>Amy Williamson</p>
                    <p className='text-xs text-gray-400'>Amy: He's very Talented... <span className='text-white'>Mon</span></p>
                </div>
            </div>
            <div className="flex items-center"> {/* Use flexbox for horizontal alignment */}
                <img src={image} className='rounded-3xl max-w-20 mr-2'/> {/* Add margin for spacing */}
                <div className='grid grid-cols-1'>
                    <p className='text-xs'>Austion Glow</p>
                    <p className='text-xs text-gray-400'>Austin: As a Gamer I... <span className='text-white'>Jan 4</span></p>
                </div>
            </div>
            <div className="flex items-center"> {/* Use flexbox for horizontal alignment */}
                <img src={image} className='rounded-3xl max-w-20 mr-2'/> {/* Add margin for spacing */}
                <div className='grid grid-cols-1'>
                    <p className='text-xs'>James Flower</p>
                    <p className='text-xs text-gray-400'>James: Sent an attachment. <span className='text-white'>Dec 31</span></p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Test