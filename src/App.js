import React, { useEffect } from 'react';
import lax from 'lax.js';
import ourPhoto from './images/p_and_e.png';
import balloonPhoto from './images/balloon.png';
import balloonWithUsPhoto from './images/balloon-with-us.png';
import './App.css';
import Logo from './components/Logo';
import Balloon1 from './components/Balloon1';
import Balloon2 from './components/Balloon2';
import Balloon3 from './components/Balloon3';
import { balloonsConfig } from './balloonsConfig';
import PlaneMsg1 from './components/PlaneMsg1';
import PlaneMsg2 from './components/PlaneMsg2';
import PlaneMsg3 from './components/PlaneMsg3';
import PlaneMsg4 from './components/PlaneMsg4';
import ScrollDownIcon from './components/ScrollDownIcon';

function App() {
  useEffect(() => {
    // Setup lax
    lax.init();

    lax.addDriver('scrollY', function () {
      return window.scrollY;
    }, { inertiaEnabled: true });

    lax.addElements(
      '.scroll-down-icon',
      {
        scrollY: {
          translateX: [
            ['0', '300'],
            [0, '200']
          ]
        }
      }
    );

    // Add your elements
    lax.addElements(
      '#initialTextContent',
      {
        scrollY: {
          translateX: [
            ['0', '600'],
            [0, '1.5 * pageWidth']
          ]
        }
      }
    );

    lax.addElements(
      '#logoContent',
      {
        scrollY: {
          translateX: [
            ['0', '600'],
            [0, '-1.5 * pageWidth']
          ]
        }
      }
    );

    lax.addElements(
      '#emptyBalloon',
      {
        scrollY: {
          translateY: [
            [20, 'screenHeight', 'screenHeight + 5', '2 * screenHeight'],
            ['-1.1 * elHeight', 'screenHeight - elHeight + 100', 'screenHeight - elHeight + 100', '(screenHeight / 2.5) - (elHeight / 2)'],
          ],
          opacity: [
            ['screenHeight', 'screenHeight + 200', 'screenHeight + 250', 'pageHeight'],
            [1, 1, 0, 0]
          ],
          perspective: [
            [0],
            [1000],
          ],
          rotateX: [
            [0],
            [0],
            {
              inertia: -1
            }
          ],
        }
      }
    );

    lax.addElements(
      '#withUsBalloon',
      {
        scrollY: {
          translateY: [
            [0, 'screenHeight', 'screenHeight + 5', '2 * screenHeight'],
            ['-1.1 * elHeight', 'screenHeight - elHeight + 100', 'screenHeight - elHeight + 100', '(screenHeight / 2.5) - (elHeight / 2)'],
          ],
          opacity: [
            [0, 'screenHeight + 5 ', 'screenHeight + 6', 'pageHeight'],
            [0, 0, 1, 1]
          ],
          perspective: [
            [0],
            [1000],
          ],
          rotateX: [
            [0],
            [0],
            {
              inertia: -1
            }
          ],
        }
      }
    );

    lax.addElements(
      '#ourPhotoMain',
      {
        scrollY: {
          opacity: [
            [0, 'screenHeight - 10', 'screenHeight + 5', 'pageHeight'],
            [1, 1, 0, 0]
          ],
          translateY: [
            [0, 'screenHeight - 30', 'screenHeight + 5', 'pageHeight'],
            [0, 0, 'elHeight', 'elHeight']
          ],
          scale: [
            [ 0, 'screenHeight - 30', 'screenHeight + 5' ],
            {
              800 : [1, 1, 0.9],
              4000: [ 1, 1, 0.8 ],
            }
          ]
        }
      }
    );

    if (!isiOS()) {
      lax.addElements(
        '#balloonsContainer',
        {
          scrollY: {
            opacity: [
              [0, 'screenHeight', 'screenHeight + 100', 'pageHeight'],
              [0, 0, 1, 1]
            ],
            translateY: [
              [0, 'screenHeight', 'screenHeight + 100', 'pageHeight'],
              [0, '-100', '-200', '-2 * screenHeight']
            ]
          }
        }
      );
    } 


    lax.addElements(
      '#planeMsg1',
      {
        scrollY: {
          translateX: [
            [0, '2 * screenHeight', '3 * screenHeight', '4 * screenHeight', '5 * screenHeight'],
            [0, 0, 'screenWidth/2 + elWidth/2', 'screenWidth/2 + elWidth/2 + elWidth/5', 'screenWidth + elWidth' ]
          ]
        }
      }
    );

    lax.addElements(
      '#planeMsg2',
      {
        scrollY: {
          translateX: [
            [0, '5 * screenHeight', '6 * screenHeight', '7 * screenHeight', '8 * screenHeight'],
            [0, 0, 'screenWidth/2 + elWidth/2', 'screenWidth/2 + elWidth/2 + elWidth/5', 'screenWidth + elWidth' ]
          ]
        }
      }
    );


    lax.addElements(
      '#planeMsg3',
      {
        scrollY: {
          translateX: [
            [0, '8 * screenHeight', '9 * screenHeight', '10 * screenHeight', '11 * screenHeight'],
            [0, 0, 'screenWidth/2 + elWidth/2', 'screenWidth/2 + elWidth/2 + elWidth/5', 'screenWidth + elWidth' ]
          ]
        }
      }
    );

    lax.addElements(
      '#planeMsg4',
      {
        scrollY: {
          translateX: [
            [0, '11 * screenHeight', '12 * screenHeight', '13 * screenHeight'],
            [0, 0, 'screenWidth/2 + elWidth/2', 'screenWidth/2 + elWidth/2 + elWidth/5' ]
          ]
        }
      }
    );

  }, []);

  return (
    <div className="App">
      <ScrollDownIcon />
      <section className="our-photo-container">
        <div id="logoContent">
          <Logo />
        </div>
        <div id="initialTextContent">
          <div className="top-spacing"/>
          <b>18 Jan 2021</b>
          <div className="top-spacing"/>
          <b>Wedding</b><br/>St. Mary's JSC, Pothanicad | &nbsp;
          <a href="https://goo.gl/maps/9hiXsr5hGahgPg7R7" target="_blank" rel="noreferrer">Maps Link</a>
          <div className="top-spacing"/>
          <b>Reception</b><br/> C9 Event Center | &nbsp;
          <a href="https://www.google.com/maps/place/C9+Event+Center+(unit+Of+C9+Hospitality)/@10.0076591,76.6053719,19.05z/data=!4m5!3m4!1s0x3b07e7abe15ee543:0xbf6bf821efe82d4!8m2!3d10.0075897!4d76.6057824" target="_blank" rel="noreferrer">Maps Link</a>
        </div>
        {<Wave />}
        <img src={ourPhoto} alt="" id="ourPhotoMain"/>
      </section>
      <section>
        <img src={balloonPhoto} alt="" class="balloon" id="emptyBalloon" style={{zIndex: 2}}/>
      </section>
      <section>
        <img src={balloonWithUsPhoto} alt="" class="balloon" id="withUsBalloon" style={{zIndex: 3}}/>
      </section>
      <section style={{position: 'relative', height: '1300vh'}}>
        <div id="balloonsContainer" style={{zIndex: 1}}>
          {RandomBalloons()}
        </div>
        <PlaneMsg1 />
        <PlaneMsg2 />
        <PlaneMsg3 />
        <PlaneMsg4 />
        {<UpArrow />}
        <div id="footnote">Art Direction by <a href="https://www.instagram.com/elisa_manoj/" target="_blank" rel="noreferrer">the bride</a>. Designed and Developed by <a href="https://www.instagram.com/prince.raju.in/" target="_blank" rel="noreferrer">the groom</a>.</div>
      </section>
    </div>
  );
}


function Wave() {
  return (
    <div class="wave-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-svg large-screen-svg"><path fill="#ecd7d0" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,240C672,224,768,192,864,154.7C960,117,1056,75,1152,53.3C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-svg small-screen-svg"><path fill="#ecd7d0" fill-opacity="1" d="M0,96L26.7,122.7C53.3,149,107,203,160,213.3C213.3,224,267,192,320,176C373.3,160,427,160,480,154.7C533.3,149,587,139,640,154.7C693.3,171,747,213,800,240C853.3,267,907,277,960,256C1013.3,235,1067,181,1120,165.3C1173.3,149,1227,171,1280,165.3C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    </div>
  )
}


function RandomBalloons() {
  // const xTopRange = 3000;
  // const yTopRange = 3000;

  // const widthLowEnd = 20;
  // const widthHighEnd = 60;

  // const config = [];

  // for (let i = 0 ; i < 200 ; i++) {
  //   config.push({
  //     type: randomIntFromInterval(0, 2),
  //     left: `${randomIntFromInterval(20, xTopRange)}px`,
  //     top: `${randomIntFromInterval(20, yTopRange)}px`,
  //     width: `${randomIntFromInterval(widthLowEnd, widthHighEnd)}px`
  //   })
  // }

  // console.log(JSON.stringify(config))

  const balloonTypes = {
    0: Balloon2,
    1: Balloon1,
    2: Balloon3,
  }

  const config = balloonsConfig;

  const balloons = [];
  
  for (const c of config) {
    const BalloonType = balloonTypes[c.type];
    balloons.push(
      <BalloonType style={
        { 
          position: 'absolute', 
          left: c.left, 
          top: c.top, 
          width: c.width,
          zIndex: 1,
        }} />
    )
  }

  return balloons;
}

function isiOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function randomIntFromInterval(min, max) { // min and max included 
  return (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(max-min+1))+min;
}

function UpArrow() {
  return (
    <div id="upArrow" onClick={() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512 512">
      <path style={{fill: '#cccccc'}} d="M263.432,3.136c-4.16-4.171-10.914-4.179-15.085-0.019c-0.006,0.006-0.013,0.013-0.019,0.019
        l-192,192c-4.093,4.237-3.975,10.99,0.262,15.083c4.134,3.992,10.687,3.992,14.82,0L245.213,36.416v464.917
        c0,5.891,4.776,10.667,10.667,10.667c5.891,0,10.667-4.776,10.667-10.667V36.416l173.781,173.781
        c4.093,4.237,10.845,4.355,15.083,0.262c4.237-4.093,4.354-10.845,0.262-15.083c-0.086-0.089-0.173-0.176-0.262-0.262L263.432,3.136
        z"/>
      <path d="M447.88,213.333c-2.831,0.005-5.548-1.115-7.552-3.115L255.88,25.749L71.432,210.219c-4.237,4.093-10.99,3.975-15.083-0.262
        c-3.992-4.134-3.992-10.687,0-14.82l192-192c4.165-4.164,10.917-4.164,15.083,0l192,192c4.159,4.172,4.149,10.926-0.024,15.085
        C453.409,212.214,450.702,213.333,447.88,213.333z"/>
      <path d="M255.88,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.213,4.776,249.989,0,255.88,0
        c5.891,0,10.667,4.776,10.667,10.667v490.667C266.546,507.224,261.771,512,255.88,512z"/>
      </svg>
      Up
    </div>
  )
}

export default App;
