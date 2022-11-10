import React from 'react';
import { FaTrash } from 'react-icons/fa';

const MyReviewCard = ({review}) => {
    const{reviews,_id}=review
    const handleDelete = id =>{

        const proceed = window.confirm('are you delete this review')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>My reviws</th>
                      
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th><FaTrash onClick={()=>handleDelete(_id)}></FaTrash></th>
                        
                        <td>{reviews}</td>
                        
                    </tr>

                  

                    
                </tbody>
            </table>
        </div>
    );
};

export default MyReviewCard;