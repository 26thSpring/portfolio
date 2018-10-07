import React from 'react';
import { HomeHeader } from 'components/HomeHeader';
import { HomeMain } from 'components/HomeMain';
import './Home.scss';

const Home = () => {
   return (
      <div className="HomeTemplate">
         <HomeHeader />
         <div className="HomeSection">
            <HomeMain />
         </div>
      </div>
   );
};

export default Home;
