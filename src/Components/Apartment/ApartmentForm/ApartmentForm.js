import React from 'react';
import { useForm } from "react-hook-form";

const ApartmentForm = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        fetch('https://rocky-tundra-21843.herokuapp.com/rentApartment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
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
                    <input type="text" ref={register({ required: true })} name="message" placeholder="Massage" className="form-control" required/>
                    {errors.message && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="submit" style={{backgroundColor: "#275A53", color: "#fff"}} placeholder="Request Booking"  className="form-control" />
                </div>
            </form>
        </div>
    );
};

export default ApartmentForm;