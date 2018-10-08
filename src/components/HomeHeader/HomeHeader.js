import React from 'react';
import './HomeHeader.scss';
import thumbnailImage from 'static/thumbnail.jpg';

const HomeHeader = () => {
   return (
      <div className="HomeHeader">
         <div className="HomeHeader_background" />
         <span>프론트엔드의 미래는 밝다 :)</span>
         <div className="HomeHeader_profile">
            <img src={thumbnailImage} alt="thumbnail" />
            @박찬욱
         </div>
      </div>
   );
};

export default HomeHeader;
