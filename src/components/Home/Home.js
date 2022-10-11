import React, { useContext } from 'react';
import { QuizeContext } from '../../layouts/Main';
import Header from '../Header/Header';
import QuizeCard from '../QuizeCard/QuizeCard';

const Home = () => {
    const quizes = useContext(QuizeContext);
    console.log("quizes: ", quizes);
    return (
        <div className='container mb-5'>
            <Header></Header>
            <div className="row row-cols-1 row-cols-md-4 row-cols-1 g-4">
                {
                    quizes.map(quize => <QuizeCard
                        key={quize.id}
                        quize={quize}
                    >
                    </QuizeCard>)
                }
            </div>
        </div>
    );
};

export default Home;