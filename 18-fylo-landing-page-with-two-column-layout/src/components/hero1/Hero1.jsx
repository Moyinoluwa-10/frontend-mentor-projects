import React from 'react'
import Illustration1 from '../../images/illustration-1.svg'
import './Hero1.css'

const Hero1 = () => {
  return (
    <>
        <section id="section1">

            <div>

                <p className="headings">
                    All your files in one secure <br />
                    location, accessible anywhere.
                </p>

                <p className="wordings">
                    Fylo stores your most important files in one secure location. Access  <br />
                    them wherever you need, share and collaborate with friends, family, <br />
                    and co-workers.
                </p>
    
                <form>

                    <div className="box1"> 
                        <input type="email" name="email" placeholder="Enter your email..." id="email" />
                        <div>
                            <small>Please check your email</small>
                        </div>
                    </div>

                    <div>
                        <button type="submit">Get Started</button>
                    </div>

                </form>

            </div>

            <div className="image">
                <img src={Illustration1} alt="illustration-1" />
            </div>

        </section>
    </>

  )
}

export default Hero1