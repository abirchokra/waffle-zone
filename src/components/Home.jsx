import React from 'react';
import Banner from './Banner';

import Card from './Card';
import CardTwo from './CardTwo';
import Waffles from './Waffles';
import Cities from './Cities';


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto font-montserrat'>
            <Banner></Banner>
            <Card></Card>
            <CardTwo></CardTwo>
            <Waffles></Waffles>
            <Cities></Cities>

        </div>
    );
};

export default Home;