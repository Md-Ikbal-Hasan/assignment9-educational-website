import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuize = ({ que }) => {
    const { id, question, correctAnswer, options } = que;
    // console.log(que);



    const showCorrectAnsware = () => toast("Correct Answar is: " + correctAnswer);

    const quizeResult = (message) => toast(message);

    const quizeEvaluation = (userAns) => {
        if (userAns === correctAnswer) {
            quizeResult("Right Answer!");
        } else {
            quizeResult("Wrong Answer!");
        }
    }

    return (
        <div className='col'>
            <ToastContainer position="top-center" autoClose={2000} closeOnClick></ToastContainer>

            <div className='card shadow-lg'>
                <div className='card-body'>

                    <div className='d-flex align-items-center justify-content-between mb-2'>
                        <h5 className='card-title'> {question} </h5>
                        <button className='border-0' onClick={showCorrectAnsware}>  <FaRegEye className='icon-size' /> </button>
                    </div>

                    <div className='card-text'>
                        {
                            options.map((op, idx) => {
                                return (
                                    <div className='mb-2' key={idx}>
                                        <input type="radio" name={id} onClick={() => quizeEvaluation(op)} />
                                        <label htmlFor=""> {op} </label>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleQuize;