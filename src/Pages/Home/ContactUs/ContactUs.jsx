import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/Button/PrimaryButton';

const ContactUs = () => {
    return (
        <section className="py-20"  
            style = {{
                background: `url(${appointment})`,
                backgroundPosition: 'bottom left',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div>
                <h4 className='text-secondary font-bold text-center'>Contact Us</h4>
                <h2 className="text-4xl font-medium  mt-3 text-white text-center">Stay connected with us</h2>
            </div>
            <div className=' max-w-[450px] mx-auto'>

                <div className="w-full   mt-8">
                    <form>
                        <div className="form-control">
                            <input name="email" type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-3">
                            <input name="subject" type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-3">
                            <textarea name="message" className="input input-bordered h-28 p-2" placeholder='Your Message' id=""  ></textarea>
                        </div>
                        <div className="text-center mt-4">
                            <PrimaryButton className="">Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;