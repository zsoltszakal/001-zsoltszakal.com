import React, {useState} from "react"
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form"

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_tcCAYonRkCJaHkI3VAegV"

    const onSubmit = (data, reset) => {
        sendEmail(
            serviceID,
            templateID, 
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            userID
            )
            reset.target.reset()
    }


    const sendEmail = (serviceID, templateID, variables, userID) =>  {

        emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Thank you. The form has been sent succesfully! I will contact you shortly!");
      }).catch(err => console.err(`Something went wrong ${err}`));
  }





    return (
            <div className="contacts" id="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <span className="success-message">{successMessage}</span>
                </div>
                <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                        
                            {/* NAME INPUT */}
                            <div className="text-center">
                            <input

                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required: "Please enter your name.",
                                    maxLength: {
                                    value: 20,
                                    message: "Please enter a name with fewer than 20 charachters"
                                }
                                })
                            }
                            />
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                            <input

                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            />
                            <div className="line"></div>
                            </div>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                            <input

                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            ref={
                                register({
                                    required: "Please enter your email.",
                                })
                            }  
                            />
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject" 
                            />    
                            <div className="line"></div>   
                            </div>                     
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* MESSAGE */}
                            <div className="text-center">
                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="Message"
                            name="message"
                            ref={
                                register({
                                    required: "Hey, I think you have forgotten to write a message :)",
                                })
                            }  
                            ></textarea>
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.message && errors.message.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">
                                contact me
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        
    )
}

export default Contacts