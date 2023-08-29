import React from 'react'
import Illustration2 from '../../images/illustration-2.svg'
import QuoteIcon from '../../images/icon-quotes.svg'
import ArrowIcon from '../../images/icon-arrow.svg'
import TestimonialAvatar from '../../images/avatar-testimonial.jpg'
import './Hero2.css'

const Hero2 = () => {
  return (
    <>
        <div id="empty"></div>

        <section id="section2">

            <div>

                <p className="headings"> 
                    Stay productive, wherever you are
                </p>

                <p className="wordings">
                    Never let location be an issue when accessing your files. Fylo has you  <br />
                    covered for all of your file storage needs.
                </p>

                
                <p className="wordings">
                    Securely share files and folders with friends, family and colleagues for <br />
                    live collaboration. No email attachments required!
                </p>

                <p className="works">
                    See how Fylo works <img src={ArrowIcon} alt="icon-arrow" className="img" /> <br />
                </p>
                <hr />

                <div className="box">

                    <img src={QuoteIcon} alt="icon-quotes" className="img" />

                    <p id="box-wordings">
                        Fylo has improved our team productivity by <br />
                        an order of magnitude. Since making the <br />
                        switch our team has become a well-oiled <br />
                        collaboration machine.
                    </p>

                    <div id="box-image">

                        <div>
                            <img src={TestimonialAvatar} alt="avatar-testimonial" id="avatar" />
                        </div>

                        <div id="box-text">
                            <span id="span-top">Kyle Burton</span><br />
                            <span id="span-bottom"> Founder & CEO, Huddle</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="image">
                <img src={Illustration2} alt="illustration-2" id="img" />
            </div>
            
        </section>
    </>

  )
}

export default Hero2