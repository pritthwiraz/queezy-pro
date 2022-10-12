import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizes = useLoaderData()
    const questions = quizes.data
    console.log(questions)
    return (
        <div>
            {
                questions.map(question => <Question
                key= {questions.id}
                question = {question}
                ></Question>) 
            };
        </div>
    );
};

export default QuizDetails;