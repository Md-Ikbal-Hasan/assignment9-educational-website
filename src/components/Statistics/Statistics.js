import React, { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QuizeContext } from '../../layouts/Main';


const Statistics = () => {
    const quizes = useContext(QuizeContext);
    console.log(quizes);
    return (


        <div>
            <h3 className='text-center mb-5'>Overview of Quize</h3>
            <div className='d-flex justify-content-center align-items-center'>

                <BarChart
                    width={400}
                    height={300}
                    data={quizes}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart >

            </div>

        </div>
    );
};

export default Statistics;