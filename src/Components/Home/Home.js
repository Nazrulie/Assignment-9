import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Stubjects from '../subjects/Stubjects';

const Home = () => {
    const { data } = useLoaderData()
    return (
        <div>
            <div >
                <div className='img-container'>
                    <h2>Games are important because they teach us how to problem solve, cooperate and work with others. They also help us learn skills like math and reading. Games have a significant impact on our lives and we should make sure that they have a positive impact on society as well.</h2>
                </div>
                <div className='all-data'>
                    {
                        data.map(data => <Stubjects
                            key={data.id}
                            data={data}></Stubjects>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;