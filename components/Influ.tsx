import image from '../assets/port.jpeg'
import imageA from '../assets/elo.jpg'
import imageB from '../assets/stev.avif'
import imageC from '../assets/bill.jpg'

const Influ = () => {
  return (
    <div className="container mx-auto py-5 ">
        <div className="grid grid-cols-4 gap-3 px-4 ">
            <div>
            <img src={image} className='rounded-3xl '/>
            <p className='text-xs text-orange-300 px-4'>Contact</p>
            </div>
            <div>
            <img src={imageA} className='rounded-3xl '/>
            <p className='text-xs px-6'>Elon</p>
            </div>
            <div>
            <img src={imageB} className='rounded-3xl '/>
            <p className='text-xs px-5'>Steve</p>
            </div>
            <div>
            <img src={imageC} className='rounded-3xl '/>
            <p className='text-xs px-7'>Bill</p>
            </div>
        </div>
    </div>
  )
}

export default Influ