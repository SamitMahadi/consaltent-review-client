import React from 'react';
import svgImg from '../../../Assets/logo/why-schoos-us.jpg'

const SectionThree = () => {
    return (
        <div className="hero ">
            <div className="hero-content grid grid-cols-2 gap-4">
                <img src={svgImg} alt='' />
                <div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                        <div className="collapse-title text-xl font-medium">
                            Do you have free appoinment?
                        </div>
                        <div className="collapse-content">
                            <p> yes i have a trial stage to know your buisness</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                        <div className="collapse-title text-xl font-medium">
                            my buisness is going through loss ehat should i do?
                        </div>
                        <div className="collapse-content">
                            <p> well i have many stage of consultancey to solve and get growth on buisness </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                        <div className="collapse-title text-xl font-medium">
                          is this is a agency or company
                        </div>
                        <div className="collapse-content">
                            <p>NO this website belongs to a person who is highly skilled at consultency</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;