import React from "react";

const Footer=()=>{
    return(
        <>
            <div>

<div className="container-fluid bg-light py-5 mb-5" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-4">

            <div className="col-lg-3 col-md-2">
                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex">
                    <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="https://www.linkedin.com/in/anupriya-saha-9746471a5/"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>


            <div className="col-lg-4 col-md-4">
                <h5 className="mb-4">Get In Touch</h5>
                <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, Kolkata, India</p>
                <p><i className="fa fa-phone-alt me-3"></i>+91 6201044371</p>
                <p><i className="fa fa-envelope me-3"></i>anupriyasaha20@gmail.com</p>
            </div>



            <div className="col-md-5  px-4"  >

                <h5 className="mb-4">Submit a Comment</h5>

                <div className="position-relative">
                    <input className="form-control bg-transparent w-100 py-2 ps-4 pe-5"
                        type="text" placeholder="Your Name"
                        required /> <br />
                </div>


                <div className="position-relative">
                    <input className="form-control bg-transparent w-100 py-2 ps-4 pe-5"
                        type="text" placeholder="Your email" 
                        required />
                    <br />
                </div>



                <div className="position-relative">
                    <textarea className="form-control bg-transparent w-100 py-4 ps-6 pe-6"
                       placeholder="Your Comment Here"
                     required />
                    <br />
                </div>

<div className="position-relative">

<button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button><br />

                </div>
                </div>
</div>

    </div>

</div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        
                        Designed By <a href="https://www.linkedin.com/in/anupriya-saha-9746471a5/">Anupriya saha</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </>
    )
}
export default Footer;