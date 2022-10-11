import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuize from '../SingleQuize/SingleQuize';

const QuizeDetails = () => {
    const data = useLoaderData();
    const quizeInfo = data.data
    const { name, questions, total } = quizeInfo;

    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <h1 className='text-center my-3'>Quize of {name}</h1>
                    <div className="row row-cols-1 row-cols-md-1 g-4" >
                        {
                            questions.map(que => <SingleQuize
                                key={que.id}
                                que={que}
                                setCount={setCount}
                                count={count}
                                total={total}
                            ></SingleQuize>)

                        }
                    </div>
                </div>

                <div className="col-md-4">
                    <h1 className='text-center my-3'>Quize Mark</h1>
                    <div className="card shadow-lg p-5 mb-5 text-center">
                        <h4>Right Answer: {count} out of {total}  </h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizeDetails;