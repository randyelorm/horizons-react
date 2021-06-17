import React from "react"
import "./footerstyles.css"
import footerImg from "../../Images/footers.png"



const Footer = () => {
    return (
        <div>
            

            <div className="container footer_container" id = "footer_container">

          <div className="row">  
                    <div className="col-lg-4 text-center visit_us_container">
                        <h2>Visit Us In Kenya</h2>
                            <h4>Nairobi, Kenya</h4>
                        <a className = "visit_us_links" href="https://www.horizonsoffices.com/ghana/locations/belgravia-center-14-riverside-drive/">
                                Belgravia Center, 14 Riverside drive,
                                4th floor, Off Riverside Drive.
                                Hanover Center, 14 Riverside Drive,
                                6th floor, Off Riverside Drive.
                        </a>
                        

                    </div>

                    <div className="col-lg-4 text-center visit_us_container">
                      <h2>Visit Us In Ghana</h2>
                          <h4>Accra, Ghana</h4>
                      <a className = "visit_us_links" href="https://www.horizonsoffices.com/ghana/locations/one-airport-square/">
                                One Airport Square, Airport City
                                8th Floor.
                      </a>
                  </div>

                    <div className="col-lg-4 text-center visit_us_container"> 
                      <h2>Visit Us In Nigeria</h2>
                        <h4>Lagos, Nigeria</h4>
                      <a className = "visit_us_links" href="https://horizonsoffices.com/nigeria/locations/sterling-bank-building/">
                                Sterling Bank Building
                      </a>
                      
                    </div>
            
        </div> 

            <div className=" social_media_container text-center">
            
            
                <a className = "social_media_links fa fa-facebook" href="https://web.facebook.com/horizonsghana"> <span></span> Facebook</a> 
                <a className = "social_media_links fa fa-instagram" href="https://www.instagram.com/horizonsoffice/"> <span></span> Instagram</a>
                <a className = "social_media_links fa fa-twitter" href="https://twitter.com/HorizonsOffice"> <span></span>  Twitter </a>  
                <a className = "social_media_links fa fa-linkedin" href="https://www.linkedin.com/company/horizons-offices/"> <span></span> LinkedIn</a>
              
              
            </div>

            <br/>
            <br/>
    

            <div className = "footer_end_text">
              <p className = "text-center"> <span className = "Horizons_Offices_in_footer text-center">Horizons Offices</span> &copy;2021</p>
              <p className = "text-center"> All rights reserved </p>
            </div>
  </div>


  <div className="container-fluid footer">
     
     <div className="row">
      
          <div className="col-lg-12">
            <img src={footerImg} alt="" className = "img-responsive footer_image"/>
          </div>
    </div>
  </div>



        </div>
    );
}

export default Footer;