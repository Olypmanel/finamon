import React from "react"
const Body = (props) => {
 const {location, url, img, Description, views } = props
 return(
     <section className="body-content">
                 <img src={img}  alt="" />
              <div>  
                  <p id="place">{location}</p>
                  <p id="info">
          
               <a href={url}>Location</a>
               <span>{views}K likes</span>
               </p>
              
                 <p id="description">
               {Description}
                 </p>


         </div>
                                    
     </section>
 )
}
export default Body