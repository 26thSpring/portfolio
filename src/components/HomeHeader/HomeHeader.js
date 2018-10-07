import React from 'react';
import './HomeHeader.scss';

const HomeHeader = () => {
   return (
      <div className="HomeHeader">
         <div className="HomeHeader_background" />
         <span>프론트엔드의 미래는 밝다 :)</span>
         <div className="HomeHeader_profile">
            <img
               src="http://shinmorae.com/files/gimgs/12_nov_2016.jpg"
               alt=""
            />
            @박찬욱
         </div>
      </div>
   );
};

export default HomeHeader;
