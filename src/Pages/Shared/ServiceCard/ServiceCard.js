import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id,img, title, discription } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{

                   discription?.length > 50 ?
                        <p>{discription.slice(0, 100) + '...'}</p>
                        :
                        <p>{discription}</p>

                }
                </p>
                <div className="card-actions">
                    <Link to={`/ServiceDetails/${_id}`}>
                        <button className="btn btn-error">see Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;