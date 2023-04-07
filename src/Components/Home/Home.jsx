import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            <p>lengh {tshirts.length}</p>
        </div>
    );
};

export default Home;