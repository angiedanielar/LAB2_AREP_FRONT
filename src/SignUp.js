import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';

function SignUp() {

    const [numbers, setNumbers] = useState("")

    // eslint-disable-next-line
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(numbers)

        //IMPORTANT: Replace the follow url with this: http://localhost:4567/calculator/calculate/

        //https://peaceful-chamber-69977.herokuapp.com/calculator/calculate/


        Axios.post("http://localhost:4567/calculator/calculate/", numbers)
            .then(Response => {
                var {mean,std} = JSON.parse(Response.data);
                console.log(mean,std);
                Swal.fire({
                    title: 'Yeah!',
                    text: ` The mean is: ${ mean} and the standard deviation is: ${ std}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }).catch(Response => {
                console.log(Response)
                Swal.fire({
                    title: 'Ops!',
                    text: 'Parámetros no válidos',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
    }

    return (

        <div className="container mt-5">
            <div className="row mt-5">
                <div className="container mt-5">
                    <div className="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
                        <form action="#" className="appointment-form" onSubmit={handleSubmit}>
                            <h3 className="mb-3">Data to be calculate</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="name" className="form-control" placeholder="Example of use: 23.1, 4, 10"
                                            onChange={(e) => setNumbers(e.target.value)} required></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Calculate!" className="btn btn-white py-3 px-4"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;