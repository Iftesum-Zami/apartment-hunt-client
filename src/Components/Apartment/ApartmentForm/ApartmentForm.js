import React from 'react';
import { useForm } from "react-hook-form";

const ApartmentForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="p-4" style={{backgroundColor: "#F4F4F4"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Full Name" className="form-control" required/>
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="number" ref={register({ required: true })} name="phone" placeholder="Phone No." className="form-control" required/>
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="email" ref={register({ required: true })} name="email" placeholder="Email address" className="form-control" required/>
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="massage" placeholder="Massage" className="form-control" required/>
                    {/* <textarea name="massage" rows="5" placeholder="Message" className="form-control" required/> */}
                    {errors.massage && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="submit" style={{backgroundColor: "#275A53", color: "#fff"}} placeholder="Request Booking"  className="form-control" />
                </div>
            </form>
        </div>
    );
};

export default ApartmentForm;