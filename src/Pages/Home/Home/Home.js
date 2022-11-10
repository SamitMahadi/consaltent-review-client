import React from 'react';
import Carusel from '../Carusel/Carusel';
import SectionThree from '../SectionThree/SectionThree';
import Services from '../../Services/Services'
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carusel></Carusel>
            <Services></Services>
            <SectionThree></SectionThree>
        </div>
    );
};

export default Home;