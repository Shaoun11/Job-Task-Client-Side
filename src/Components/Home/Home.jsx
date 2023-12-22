import React from 'react';
import Navber from '../Navber/Navber';
import Banner from '../Baner/Baner';
import UsegSction from '../UsegSection/UsegSction';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import TaskCard from '../TaskCard/TaskCard';

const Home = () => {
    const taskdata=useLoaderData();
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <UsegSction></UsegSction>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
            {
                taskdata.map(sort=><TaskCard key={sort._id} data={sort} ></TaskCard>)
            }
             
           </div>
         <div className='-mb-6'>
         <Footer></Footer>
         </div>
        </div>
    );
};

export default Home;