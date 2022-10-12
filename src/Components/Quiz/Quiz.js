import React from 'react';

const Quiz = ({quiz}) => {
    const {name, logo} = quiz
    return (
        <div className='border border-black p-3 bg-zinc-100'>         
         <img className='border border-black' src={logo} alt="" />
        <div className='flex justify-between mt-2'>
        <p>Name: {name}</p>
        <button className='bg-blue-500 p-2'>Start Quiz</button>
        </div>
        </div>
    );
};

export default Quiz;