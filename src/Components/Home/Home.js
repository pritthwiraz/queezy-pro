import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const loaderData = useLoaderData()
    const quizes =  loaderData.data
    // console.log(quizes)
    return (
        <div>
            <div className='container mx-auto mt-7 grid grid-cols-1 md:grid-cols-4 gap-3 '>
           {
            quizes.map( quiz => <Quiz
            key = {quiz.id}
            quiz ={quiz}
            ></Quiz>)
           }
        </div>
        </div>
    );
}; 

export default Home;