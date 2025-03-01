import About from "./Components/About/About";
import CivilServices from "./Components/CivilServices/CivilServices";
import Courses from "./Components/Courses/Courses";
import GoogleReviews from "./Components/GoogleReviews/GoogleReviews";
import Navbar from "./Components/Navbar/Navbar";
import OurFaculty from "./Components/OurFaculty/OurFaculty";
import Scholorship from "./Components/Scholorship/Scholorship";
import Slider from "./Components/Slider/Slider";
import StayConnect from "./Components/StayConnected/StayConnect";
import WhyLearn from "./Components/WhyLearn/WhyLearn";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Courses/>
      <WhyLearn/>
      <About/>
      <CivilServices/>
      <OurFaculty/>
      <Scholorship />
      <GoogleReviews />
      <StayConnect/>
    </div>
  );
}

export default App;
