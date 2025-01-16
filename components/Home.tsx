import Footer from "./Footer"
import Influ from "./Influ"
import Max from "./Max"
import Navbar from "./Navbar"
import Navs from "./Navs"
import Test from "./Test"





const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="py-3">
            <Navs />
        </div>
        <div className="py-14">
            <Max />
            <Influ />
            <Test />
            <Footer />
        </div>
    </div>
  )
}

export default Home