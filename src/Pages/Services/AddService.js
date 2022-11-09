import React from 'react';

const AddService = () => {
    return (

        <div>
            {/* The button to open modal */}
            <div className='text-center'>
            <label htmlFor="my-modal-5" className="btn btn-error text-center  mt-4 mb-4">Add Service</label>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className='mt-20 mb-20'>
                        <div className='form-container w-1/2 h-auto bg-white border-2 border-red-700 rounded-lg	m-auto pl-12 '>
                            <h2 className='form-title text-3xl font-normal leading-10 text-center'>Add a Service</h2>
                            <form>
                                <div className="form-control mb-5">
                                    <label className='block font-normal text-xl mb-2' htmlFor="email">Service Title</label>
                                    <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='name' />
                                </div>
                                <div className="form-control mb-5">
                                    <label className='block font-normal text-xl mb-2' htmlFor="email">Photo Url</label>
                                    <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='photoURL' />
                                </div>
                                <div className="form-control mb-5">
                                    <label className='block font-normal text-xl mb-2' htmlFor="email">Details</label>
                                    <input className='w-1/2 h-32 text-lg pl-3 border-2 border-gray-500' type="email" name='email' required />
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


    );
};

export default AddService;