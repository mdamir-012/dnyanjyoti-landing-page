import Courses from "./Components/Courses/Courses";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import WhyLearn from "./Components/WhyLearn/WhyLearn";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Courses/>
      <WhyLearn/>
     
    </div>
  );
}

export default App;
