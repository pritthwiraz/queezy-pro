import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const loaderData = useLoaderData() 
    const quizes =  loaderData.data
    console.log(quizes)
    return (
        <div>
           {
            quizes.map( quiz => <Quiz
            key = {quiz.id}
            quiz ={quiz}
            ></Quiz>)
           }
        </div>
    );
};

export default Home;