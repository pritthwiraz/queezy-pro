import React from 'react';

const Question = ({question}) => {
    const {questions} = question
    return (
        <div>
            <h1>Question:{questions}</h1>
        </div>
    );
};

export default Question;