import NavBar from "../components/navbar";
import MainCarousel from "../components/CarouselSlider";
import MenuCards from "../components/menu";
import Footer from "../components/footer";

let HomePage = () => {
    return (
        <>
        <div>
            <NavBar />
        </div>

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