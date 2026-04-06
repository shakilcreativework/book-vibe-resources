import React from 'react';
import Banner from '../../components/homepage/Banner';
import AllBooks from '../../components/homepage/AllBooks';

const HomePage = () => {
    return (
        <div className='px-4 md:px-0'>
            <Banner />
            <AllBooks />
        </div>
    );
};

export default HomePage;