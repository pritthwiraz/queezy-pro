import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo} = quiz
    return (
        <div className='border border-black p-3 bg-zinc-100'>         
         <img className='border border-black' src={logo} alt="" />
        <div className='flex justify-between mt-2'>
        <p>Name: {name}</p>
        <Link className='bg-blue-500 p-2' to={`quiz/${id}`}>Start Quiz</Link>
        </div>
        </div>
    );
};

export default Quiz;