import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav/TopNav';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import HomeSwipper from './Components/Swiper/HomeSwipper';
import CourseSubjectDetails from './Components/CourseSubjectDetails/CourseSubjectDetails';
import CloudRoom from './Components/CloudRoom/CloudRoom';
import Live from './Components/Live/Live';
import ZikryShow from './Components/ZikryShow/ZikryShow';
import ProtectionSupport from './Components/ProtectionSupport/ProtectionSupport';
import Monitor from './Components/Monitor/Monitor';

function App() {
  return (<>
  
    <TopNav/>
    <Navbar/>
    <Home/>
    <HomeSwipper/>
    {/* <CourseSubject/> */}
    <CourseSubjectDetails/>
    <CloudRoom/>
    <Live/>
    <ZikryShow/>
    <ProtectionSupport/>
    <Monitor/>
  </>
  );
}

export default App;
