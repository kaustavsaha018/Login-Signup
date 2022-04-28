import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <section className="mb-4">

<h2 className="h1-responsive font-weight-bold text-center my-3">Contact us</h2>
<p className="text-center w-responsive mx-auto mb-3.5 p-1">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>


<div className="row mx-auto">

    <div className="col-md-5 mb-md-0 mb-2 mx-auto">
        <form id="contact_form" name="contact_form">

            <div className="row">

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <label for="name" className="">Your name</label>
                        <input type="text" id="contact_form_name" name="name" required="true" className="form-control"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <label for="email" className="">Your email</label>
                        <input type="email" id="contact_form_email" name="email" required="true" className="form-control"/>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <label for="phone" className="">Phone</label>
                        <input type="number" id="contact_form_phone" name="phone" required="true" className="form-control"/>
                    </div>
                </div>
            </div>
 
            <div className="row">

                <div className="col-md-12">

                    <div className="md-form">
                        <label for="message">Your message</label>
                        <textarea type="text" id="contact_form_message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    </div>

                </div>
            </div>

        </form>

        <div className="text-center text-md-left mt-3 mb-2">
            <input type="submit" name='send' className="btn btn-primary" id="send_form_message" value="Send"/>
        </div>
        <div className="status"></div>

    </div>
   
    <div className="text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>KIIT Road, Patia, Bhubaneswar, Odisha 751024</p>
            </li>

            <li><i className="fas fa-phone mt-0 fa-2x"></i>
                <p>+ 91 8260226911</p>
            </li>

            <li><i className="fas fa-envelope mt-0 fa-2x"></i>
                <p>1929018@kiit.ac.in</p>
            </li>
        </ul>
    </div>

</div>

</section>

    </>
  )
}

export default Contact