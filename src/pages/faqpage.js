import Faq from "../components/faq";

import NavBar from "../components/navbar";
import  Footer from "../components/footer";



let FaqPage = () => {
    return(
<>
<div><NavBar /></div>


<div className="bg bg-light bg-gradient">
<div><Faq /></div>

<div><Footer /></div>

</div>
</>
    );
}

export default FaqPage;