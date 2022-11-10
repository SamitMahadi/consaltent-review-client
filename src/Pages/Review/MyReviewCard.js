import React from 'react';

const MyReviewCard = ({review}) => {
    const{reviews}=review

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>1</th>
                        
                        <td>{reviews}</td>
                        
                    </tr>

                  

                    
                </tbody>
            </table>
        </div>
    );
};

export default MyReviewCard;