import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuize from '../SingleQuize/SingleQuize';

const QuizeDetails = () => {
    const data = useLoaderData();
    const quizeInfo = data.data
    const { name, questions } = quizeInfo;
    return (
        <div className='container'>
            <h1 className='text-center my-3'>Quize of {name}</h1>
            <div className="row row-cols-1 row-cols-md-1 g-4" >
                {
                    questions.map(que => <SingleQuize
                        key={que.id}
                        que={que}
                    ></SingleQuize>)

                }
            </div>

        </div>
    );
};

export default QuizeDetails;