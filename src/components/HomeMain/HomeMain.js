import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './HomeMain.scss';
import devlog from 'static/devlog_main.png';
import tetris from 'static/tetris.png';
import sort from 'static/sort.png';

const HomeMain = () => {
   return (
      <Fragment>
         <div className="HomeMain_left">
            <div className="intro">
               <span>소개</span>
               안녕하세요. 프론트엔드 개발자 지망생 박찬욱입니다. 백엔드 언어를
               전공했지만 프론트엔드의 매력에 빠져서 포지션을 옮겼습니다.
               <br />
               새로운 언어, 기술을 배우는 것을 정말 좋아해서 계속해서 변화하고
               성장중인 프론트엔드에 발맞춰 빠르게 학습하며 개발 중입니다.
               <br />
            </div>
            <div className="career">
               <span>경력</span>
               <div className="career_company">
                  <div className="career_company_image">{'<null />'}</div>
                  <div style={{ flex: '1 0 0' }}>
                     <span>null</span>이 곳에 첫 페이지를 장식할 멋진 회사를
                     찾고 있습니다.
                  </div>
               </div>
            </div>
         </div>
         <div className="HomeMain_right">
            <span>기술 스택</span>
            <div className="techStackList">
               <div>React</div>
               <div>Javascript</div>
               <div>Node.js</div>
               <div>Spring</div>
               <div>Oracle</div>
               <div>MongoDB</div>
               <div>HTML5 / CSS3</div>
            </div>
            <span>포트폴리오</span>
            <div className="portfolioList">
               <div className="portfolio">
                  <img src={devlog} alt="devlog" />
                  <div className="portfolio_info">
                     <div className="portfolio_title">
                        devlog ( 마크다운 에디터를 적용한 개발일지 블로그 )
                     </div>
                     <div className="portfolio_regdate">
                        2018년 9월 ~ 개발 중
                     </div>
                     <div className="portfolio_stack">
                        <div className="stack">
                           <div className="dot red" />
                           React
                        </div>
                        <div className="stack">
                           <div className="dot blue" />
                           Javascript
                        </div>
                        <div className="stack">
                           <div className="dot teal" />
                           Node.js
                        </div>
                        <div className="stack">
                           <div className="dot orange" />
                           sass
                        </div>
                        <div className="stack">
                           <div className="dot cyan" />
                           MongoDB
                        </div>
                        <div className="stack">
                           <div className="dot yellow" />
                           Heroku Cloud
                        </div>
                     </div>
                  </div>
               </div>
               <div className="portfolio">
                  <img src={tetris} alt="tetris" />
                  <div className="portfolio_info">
                     <div className="portfolio_title">
                        DOM / Javascript 객체 기반 테트리스
                     </div>
                     <div className="portfolio_regdate">
                        2018년 5월 ~ 2018년 6월
                     </div>
                     <div className="portfolio_stack">
                        <div className="stack">
                           <div className="dot blue" />
                           Javascript
                        </div>
                        <div className="stack">
                           <div className="dot orange" />
                           HTML
                        </div>
                        <div className="stack">
                           <div className="dot cyan" />
                           CSS
                        </div>
                     </div>
                  </div>
               </div>
               <div className="portfolio">
                  <img src={sort} alt="tetris" />
                  <div className="portfolio_info">
                     <div className="portfolio_title">
                        애니메이션 기반 소팅 프로그램
                     </div>
                     <div className="portfolio_regdate">
                        2018년 5월 ~ 2018년 6월
                     </div>
                     <div className="portfolio_stack">
                        <div className="stack">
                           <div className="dot blue" />
                           Javascript
                        </div>
                        <div className="stack">
                           <div className="dot red" />
                           JQuery
                        </div>
                        <div className="stack">
                           <div className="dot orange" />
                           HTML
                        </div>
                        <div className="stack">
                           <div className="dot cyan" />
                           CSS
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default HomeMain;
