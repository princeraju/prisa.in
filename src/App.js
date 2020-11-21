import ourPhoto from './images/us.png';
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <section className="our-photo-container">
        <div>
          <Logo />
        </div>
        <div id="initial-text-content">
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
      </section>
      <img src={ourPhoto} alt="" id="ourPhotoMain"/>
    </div>
  );
}


function Wave() {
  return (
    <div class="wave-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ecd7d0" fill-opacity="1" d="M0,96L26.7,122.7C53.3,149,107,203,160,213.3C213.3,224,267,192,320,176C373.3,160,427,160,480,154.7C533.3,149,587,139,640,154.7C693.3,171,747,213,800,240C853.3,267,907,277,960,256C1013.3,235,1067,181,1120,165.3C1173.3,149,1227,171,1280,165.3C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    </div>
  )
}

export default App;
