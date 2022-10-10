import React from 'react';

const Option = ({ op }) => {
    return (
        <div className='mb-2'>
            <input type="radio" />
            <label htmlFor=""> {op} </label>
        </div>

    );
};

export default Option;