import React from "react"
import "./carouselstyles.css"
import CarouImg1 from "../../Images/office1.jpg"
import CarouImg2 from "../../Images/office2.jpg"
import CarouImg3 from "../../Images/office3.jpg"




const Carousel = () => {
    return (
       
        <div>

   <div className="row">
      
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
              
                
                <div className="carousel-inner car-images" role="listbox">
                  <div className="item active ">
                    <img src={CarouImg1} alt="..."/>
                    <div className="carousel-caption carousel_caption1">
                      <p className = "Horizons_offices_text "> HORIZONS OFFICES </p> 
                      <p className = "home_to_text">"..Home to Africa's</p>
                      <p className = "home_to_text">  Business </p>
                  
            
                    </div>
                  </div>
                  <div className="item">
                    <img src={CarouImg2}  alt="..." />
                    <div className="carousel-caption carousel_caption2">
                      <p className = "we_save_you_text">"...We save you the hassle of setting up, expanding or downsizing your office" </p> 
                  
                    </div>
                  </div>

                  <div className="item">
                    <img src={CarouImg3}  alt="..." />
                    <div className="carousel-caption carousel_caption3">
                    <p><span className = "connect_with_us">Connect with us and  </span>  <span className = "start_working">start working</span> </p> 
                    
                    </div>
                  </div>
                  ...
                </div>
          
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>

      



   </div>


        </div>
    );
}

export default Carousel;