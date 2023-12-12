import Navbar from "../../layout/Navbar/Navbar"
import Home from "./src/Home"
import Pricing from "./src/Pricing"
import FAQ from "./src/FAQ"
import Stats from "./src/Stats"
import Testimonials from "./src/Testimonials"
import Footer from "../../layout/Footer/Footer"

export default () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <Pricing/>
        <FAQ/>
        <Stats/>
        <Testimonials/>
        <Footer/>
        </>
    )
}