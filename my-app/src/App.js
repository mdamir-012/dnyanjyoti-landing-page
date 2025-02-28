import About from "./Components/About/About";
import CivilServices from "./Components/CivilServices/CivilServices";
import Courses from "./Components/Courses/Courses";
import Navbar from "./Components/Navbar/Navbar";
import OurFaculty from "./Components/OurFaculty/OurFaculty";
import Scholorship from "./Components/Scholorship/Scholorship";
import Slider from "./Components/Slider/Slider";
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
      <Scholorship/>
    </div>
  );
}

export default App;
