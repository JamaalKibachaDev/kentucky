import "./css/MainFooter.css";

const MainFooter = () => {
    return(
        <>
        <div className="footer">
            <div className="d-flex justify-content-evenly fs-5">
                <div className="footer-left">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Our Menu</a></li>
                        <li><a href="">Offers</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>
                </div>

<div className="border"></div>

                <div className="footer-right">
                    <ul>
                    <li><a href="">Frequently Asked Questions</a></li>
                    <li><a href="">Colonel Sanders Recipe</a></li>
                    </ul>

                    <span className="social-header">Chat with us on:</span>
                     <br />
                    <div className="social-icons">
                      <a href=""><i class="fa-brands fa-instagram fa-xl"></i></a> 
                      <a href=""><i class="fa-brands fa-facebook fa-xl"></i></a>  
                      <a href=""><i class="fa-brands fa-x-twitter fa-xl"></i></a>   
                      </div>
                </div>
            </div>
            <div className="text-center my-4">
             &copy;2024 KFC Kenya All Rights Reserved.
             </div>
        </div>
        </>
    );
}

export default MainFooter;