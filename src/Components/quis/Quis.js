import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { faEye, } from '@fortawesome/free-solid-svg-icons'
import './quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Quis = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    const chack = (option, correctAnswer) => {
        if (option === correctAnswer) {
            alert('Yes. You chose the right one')
        }
        else {
            alert('NO. You chose the wrong one')

        }

    }
    const eyeIcon = (correctAnswer) => {
        alert('correct Answer : ' + correctAnswer)
    }
    return (
        <div>

            <div>
                <h2>Quiz About {quiz.data.name}</h2>
                <div className='quiz-component'>
                    {quiz.data.questions.map(data =>
                        <div className='option-components' key={data.id}>
                            <div className='top-container'>
                                <h3>{data.question}</h3>
                                <button onClick={() => eyeIcon(data.correctAnswer)}><FontAwesomeIcon icon={faEye} /></button>
                            </div>
                            <div className='options'>
                                {data.options.map(option =>
                                    <li onClick={() => chack(option, data.correctAnswer)} className='option'
                                        key={option}>{option}
                                    </li>)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quis;