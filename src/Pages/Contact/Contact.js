import React from 'react';
import contactImage from '../../Assets/Contact_image/contact-form-best-practices.png'

const Contact = () => {

    const handleSubmit=event=>{
        event.preventDefault()
        const form= event.target
const name= form.name.value;
const email= form.email.value;
const number= form.number.value;
        console.log(name, email, number)
    }

    return (
        <div>
           <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    {/* <div className="text-center hidden lg:block lg:text-left">
      <img className='w-1/2' src={contactImage} alt=""/>
      
    </div> */}
    <form onSubmit={handleSubmit}>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body ">
      <h1 className="text-xl font-bold">Please provide your details !</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input name='name' type="text" placeholder="full name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact Number</span>
          </label>
          <input name='number' type="text" placeholder="contact number" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name='message' className="textarea textarea-bordered" placeholder="Message"></textarea>
          
        </div>
       
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-outline">Submit</button>
        </div>
      </div>
    </div>
    </form>
   
  </div>
</div>
        </div>
    );
};

export default Contact;