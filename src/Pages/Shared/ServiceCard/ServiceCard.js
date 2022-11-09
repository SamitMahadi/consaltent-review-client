import React from 'react';

const ServiceCard = ({service}) => {
    const{img,title,discription}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{
                    
                    discription.length>50 ?
                    <p>{discription.slice(0,100)+'...'}</p>
                    :
                    <p>{discription}</p>
                  
                  }
                </p>
                <div className="card-actions">
                    <button className="btn btn-error">see Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;