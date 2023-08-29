import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <>
        <section id="section3">

            <div>

                <p className="headings">
                    Get early access today
                </p>

                <p className="wordings">
                    It only takes a minute to sign up and our free starter tier is <br />
                    extremely generous. If you have any questions, our support team <br />
                    would be happy to help you.
                </p>

            </div>

            <div>

                <form>

                    <input type="email" name="email" placeholder="email@example.com" id="email2"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" /><br />
                    <div><small>Please check your email</small></div>
                    <button type="submit">Get Started For Free</button>

                </form>

            </div>

        </section>
    </>

  )
}

export default Subscribe