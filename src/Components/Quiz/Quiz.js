import React from 'react';

const Quiz = ({quiz}) => {
    const {name, logo} = quiz
    return (
        <div className=''>
         <div>
         <img src={logo} alt="" />
        <p>Name: {name}</p>
         </div>
        </div>
    );
};

export default Quiz;