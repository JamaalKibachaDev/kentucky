
import MainCarousel from "../components/CarouselSlider";
import MenuCards from "../components/HomeMenu";
import Footer from "../components/footer";

let HomePage = () => {
    return (
        <>
        <div>
            <MainCarousel />
        </div>

        <div>
            <MenuCards />
        </div>

    <div>
        <Footer />
    </div>
        </>
    );
}

export default HomePage;