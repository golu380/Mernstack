import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
       <>
       <div className="contact_info">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-lg-10 offset-lg-1">
                       <div className="contact_info_item">
                           <img src="" alt="phone"/>
                           <div className="contact_info_title">
                               Phone
                           </div>
                           <div className="contact_info_text">
                               9798301951
                           </div>

                       </div>
                   </div>
               </div>
           </div>
           <div className="container-fluid1">
               <div className="row">
                   <div className="col-lg-10 offset-lg-1">
                       <div className="contact_info_item">
                           <img src="" alt="Email"/>
                           <div className="contact_info_title">
                               Email
                           </div>
                           <div className="contact_info_text">
                               amitkumardubey744@gmail.com
                           </div>

                       </div>
                   </div>
               </div>
           </div>
       </div>
       </>
    )
}
