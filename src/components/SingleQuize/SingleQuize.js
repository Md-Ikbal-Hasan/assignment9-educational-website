import React from 'react';
import Option from '../Option/Option';
import { FaRegEye } from 'react-icons/fa'
const SingleQuize = ({ que }) => {
    const { id, question, correctAnswer, options } = que;
    console.log(que);

    const showCorrectAnsware = () => {
        alert(correctAnswer);
    }


    return (
        <div className='col'>
            <div className='card shadow-lg'>
                <div className='card-body'>

                    <div className='d-flex align-items-center justify-content-between mb-2'>
                        <h5 className='card-title'> {question} </h5>
                        <button className='border-0' onClick={showCorrectAnsware}>  <FaRegEye className='icon-size' /> </button>

                    </div>

                    <div className='card-text'>
                        {
                            options.map((op, idx) => <Option key={idx} op={op}></Option>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleQuize;