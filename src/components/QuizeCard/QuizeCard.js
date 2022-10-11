import React from 'react';
import { Link } from 'react-router-dom';

const QuizeCard = ({ quize }) => {
    console.log(quize);
    const { logo, name, total, id } = quize;
    return (

        <div className="col">
            <div className="card shadow-lg border-0">
                <img src={logo} className="card-image " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Total Quize: <b>{total}</b> </p>

                    <Link className='text-white text-decoration-none' to={`/${id}`}>
                        <button className='btn btn-success w-100'>
                            Start quize
                        </button>
                    </Link>

                </div>
            </div>
        </div >




    );
};

export default QuizeCard;