import React, { useState } from 'react';
import './AddHouseForm.css';

const AddHouseForm = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        // const formData = new FormData()
        // formData.append('file', file);
        // formData.append('description', info.description);
        // formData.append('title', info.title);

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('price', info.price);
        formData.append('location', info.location);
        formData.append('bedroom', info.bedroom);
        formData.append('bathroom', info.bathroom);
        formData.append('pricedetail', info.pricedetail);
        formData.append('propertydetail', info.propertydetail);

        fetch('https://rocky-tundra-21843.herokuapp.com/addApartment', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="col-md-12 mt-2">
            <h3 className="mb-3">Add House</h3>
            {/* <form onSubmit={handleSubmit}>
                <div className="row form-inner">
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" id="exampleInputEmail1" placeholder="title" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputName1">Description</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="description" id="exampleInputName1" placeholder="description" />
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlFile1">Upload a Icon </label>
                        <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </div>
                    <button type="submit" class="btn btn-admin px-4 mt-2 mr-1 float-right">Submit</button>
            </form> */}


            <form onSubmit={handleSubmit}>
                <div className="row form-inner p-3 mr-3">
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" id="exampleInputEmail1" placeholder="Service Title" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputName1">Description</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="description" id="exampleInputName1" placeholder="Description" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputName1">Location</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="location" id="exampleInputName1" placeholder="Location" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputName1">Price Details</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="pricedetail" id="exampleInputName1" placeholder="Pricedetail" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Price</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="price" id="exampleInputEmail1" placeholder="Price" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleInputName1">No of Bedroom</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="bedroom" id="exampleInputName1" placeholder="No of Bedroom" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                            <label for="exampleInputName1">No of Bathroom</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="bathroom" id="exampleInputName1" placeholder="No of Bathroom" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputName1">Property Details</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="propertydetail" id="exampleInputName1" placeholder="propertydetail" />
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlFile1">Thumbnail </label>
                        <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </div>
                    <button type="submit" class="btn btn-admin px-4 mt-3 mr-3 float-right">Submit</button>
            </form>
        </div>
    );
};

export default AddHouseForm;