
import './css/aboutUs.css'

const AboutUs = () => {

    return(
        <>

<div className = "py-5"><br /> <br /></div>

        <div className="container">

            <div className="d-flex">
              <p className="px-3">
              <span>KFC</span>, or <span>Kentucky Fried Chicken</span>, has a rich history that traces back to the 1930s. It was founded by <span>Colonel Harland Sanders</span>, who began selling fried chicken from his roadside restaurant in Corbin, Kentucky, during the <span>Great Depression</span>. Sanders developed a secret blend of <span>11 herbs and spices</span> that became the hallmark of his fried chicken.
                </p>  

                <p>In <span>1952</span>, Sanders began franchising the concept, opening the first KFC franchise in<span> Salt Lake City, Utah</span>. The brand quickly gained popularity, and by the 1960s, KFC had expanded across the United States and into other countries.</p>
            </div>

            <div className="d-flex justify-content-center my-4 px-4" >
        
                <p>
                    Sanders became a cultural icon, known for his <span>white suit and black string tie</span>, and he remained involved in the company until his death in 1980. Today, KFC is one of the largest fast-food chains in the world, famous for its fried chicken and side dishes, with thousands of locations globally. <span>The brand's commitment to its original recipe remains a significant part of its identity.</span>
                </p>
            </div>
        </div>


        <hr />
        <hr />
<div>

</div>
        <h3 className=" main-h3 text-center
         py-3 fs-2">Our <br /> Heritage</h3>


{/*1*/}
        <div className="images-arrange">
            <img src={require("./images/colonel-sanders-img.webp")} alt="" className="heritage-img d-flex mx-3 w-50"/>

            <div className="">
            <aside>
                <h3 className="aside-header">1952 - The Start of Greatness
                </h3>
                <p class="gallery-1 px-2">
                Colonel Sanders dressed up in his signature attire as he opens his <span>first KFC Franchise  in Salt Lake City, Utah in 1952.</span>
                </p>
            </aside>
            </div>
        </div>

        <hr />

        {/*2 */}

        <div className="images-arrange">
        <aside>
                <h3 className="aside-header">1957 - The Original Bucket
                </h3>
                <p class="gallery-1 mx-3">
                Say “bucket of chicken” and you think KFC®.The original KFC® bucket from <span>1957</span> has now come to be recognized worldwide.
                </p>
            </aside>
            <img src={require("./images/the_original_bucket.webp")} alt="" className="heritage-img d-flex mx-4 w-75"/>
        </div>
        
        <hr />


        {/*3 */}

        <div className="images-arrange">
            <img src={require("./images/legend-sanders.webp")} alt="" className="heritage-img d-flex mx-3 w-50"/>

            <div className="">
            <aside>
                <h3 className="aside-header">1976 - Celebrity Status
                </h3>
                <p class="gallery-1 px-2">
                Colonel Sanders is named the 2nd most famous and recognizable celebrity according to an independent survey.
                </p>
            </aside>
            </div>
        </div>

        <hr />

       {/*3 */}
        <div className="images-arrange">
        <aside>
                <h3 className="aside-header">1980 - A Legend Passes
                </h3>
                <p class="gallery-1 mx-3">
                After a rich and full life, Harland Sanders sadly passes away at the age of <span>90</span>. His legacy lives on through his <span>Original Recipe chicken</span> and the company logo adapts over the years, with the Colonel's face remaining at the forefront of the design.
                </p>
            </aside>
            <img src={require("./images/a-legend-passes.webp")} alt="a-legend-passes" className="heritage-img d-flex mx-4 w-75"/>
        </div>

        </>
    );
}

export default AboutUs;