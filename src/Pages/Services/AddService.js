import React, { useState } from 'react';

const AddService = () => {

    const [service, setService] = useState()
    const handleAddService = event => {
        event.preventDefault();
        console.log(service);


        fetch('https://consaltent-review-server.vercel.app/services',{
      
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(service)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('service added successfully')
                event.target.reset()
            }
        })

    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        console.log(value,field);
        const newService ={...service}
        newService[field] = value;
        setService(newService); 
        
    }

    


    return (

        <div>
            <div>
                { /* The button to open modal */}
                <div className='text-center'>
                    <label htmlFor="my-modal-5" className="btn btn-error text-center  mt-4 mb-4">Add Service</label>
                </div>


                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">

                        <div className='mt-20 mb-20'>
                            <div className='form-container w-1/2 h-auto bg-white border-2 border-red-700 rounded-lg	m-auto pl-12 '>
                                <h2 className='form-title text-3xl font-normal leading-10 text-center'>Add Service</h2>
                                <form onSubmit={handleAddService} >
                                    <div className="form-control mb-5">
                                        <label className='block font-normal text-xl mb-2' htmlFor="email">Service Title</label>
                                        <input onBlur={handleInputBlur} className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='title' />
                                    </div>
                                    <div className="form-control mb-5">
                                        <label className='block font-normal text-xl mb-2' htmlFor="email">Photo Url</label>
                                        <input onBlur={handleInputBlur} className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='photoURL' />
                                    </div>
                                    <div className="form-control mb-5">
                                        <label className='block font-normal text-xl mb-2' htmlFor="email">Details</label>
                                        <input onBlur={handleInputBlur} className='w-1/2 h-32 text-lg pl-3 border-2 border-gray-500' type="text" name=' discription' required />
                                    </div>


                                    <div className='mb-4'>
                                        <input className='btn-submit w-24 h-12 bg-red-700 rounded-lg font-normal leading-10 text-white ' type="submit" name="" id="" value='submit' />
                                    </div>

                                </form>

                            </div>
                        </div>




                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn btn-error ">Close</label>
                        </div>

                    </div>
                </div>
            </div>

            
        </div>


    );
};

export default AddService;