import React from "react"
import Virtual from "../../Images/virtual.jpg"
import Customized from "../../Images/customized.jpg"
import Serviced from "../../Images/serviced.jpg"
import Meeting from "../../Images/meeting.jpg"
import "./housetypes.css"


const HouseTypes = () => {
    return (
        <div>
            <div className="container-fluid house_types_main_container">

<h1 className = "text-center Own_A_Property_text" id = "Own_A_Property" >PLANS</h1>

 <div className="container house_types_container">

   <div className="row">

     <div className="col-md-3 thumbnails">
       <div className="thumbnail zoom ">
         <img src={Virtual} alt="..." className = "thumbnail_images"/>
         <div className="caption">
           <h3 className = "thumbnail_captions"> Virtual Offices</h3>
           <p className = "thumbnail_texts">
             Our virtual offices allow your businesses to get our location address,
             phone servies and also you beome a member of our community with benefits
             such as access to our meeting rooms.
             <span className = "disappear">  can customize your office to suit your preferences. Also, you become
               a member of</span>
           
           </p>
           <p><a href="https://www.horizonsoffices.com/ghana/services/virtual-offices/" className="btn btn-primary" role="button">See More</a> <a href="https://www.horizonsoffices.com/ghana/book-tour/" className="btn btn-default" role="button">Book A Tour</a></p>
         </div>
       </div>
     </div>

     <div className="col-md-3 thumbnails">
       <div className="thumbnail zoom ">
         <img src={Customized} className = "thumbnail_images"/>
         <div className="caption">
           <h3 className = "thumbnail_captions">Customized Offices</h3>
           <p className = "thumbnail_texts">
            Our customized offices offer a great location for your business and you 
            can customize your office to suit your preferences. Also, you become
            a member of our community with benefits such as access to our meeting rooms.
            
           </p>
           <p><a href="https://www.horizonsoffices.com/ghana/services/business-lounge/" className="btn btn-primary" role="button">See More</a> <a href="https://www.horizonsoffices.com/ghana/book-tour/" className="btn btn-default" role="button">Book A Tour</a></p>
         </div>
       </div>
     </div>

     <div className="col-md-3 thumbnails">
       <div className="thumbnail zoom ">
         <img src={Serviced}className = "thumbnail_images"/>
         <div className="caption">
           <h3 className = "thumbnail_captions">Serviced Offices</h3>
           <p className = "thumbnail_texts">
           Our serviced offices offer a great location for your business.
           And we provide services such as internet, utilies and offers from our partners.
           Also, you become a member of our community with benefits such as access to our meeting rooms.


           </p>
           <p><a href="https://www.horizonsoffices.com/ghana/services/serviced-offices/" className="btn btn-primary" role="button">See More</a> <a href="https://www.horizonsoffices.com/ghana/book-tour/" className="btn btn-default" role="button">Book A Tour</a></p>
         </div>
       </div>
     </div>

     <div className="col-md-3 thumbnails">
       <div className="thumbnail zoom ">
         <img src={Meeting} alt="..." className = "thumbnail_images"/>
         <div className="caption">
           <h3 className = "thumbnail_captions"> Meeting Rooms </h3>
           <p className = "thumbnail_texts">     
           Our meeting rooms offer a great location for your meeting with your clients.
           or business partners. We provide presentation equipments and coffee.
           Also, you become a member of our community with benefits such as access to our meeting rooms.

           </p>
           <p><a href="https://www.horizonsoffices.com/ghana/services/co-working-spaces/" className="btn btn-primary" role="button">See More</a> <a href="https://www.horizonsoffices.com/ghana/book-tour/" className="btn btn-default" role="button">Book A Tour</a></p>
         </div>
       </div>
     </div>


       
             
       

   </div>


 </div>
</div>



        </div>
    );
}

export default HouseTypes;