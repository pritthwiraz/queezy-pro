import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quizes = useLoaderData()
    console.log(quizes)
    return (
        <div>
       
        </div>
    );
};

export default Home;