import "./App.css";
import Navbar from "./Components/Navbar";
import MainPageLayout from "./Components/MainPageLayout";
import Home from "./Components/Home/Home";
import MainFooter from "./Components/Footer/MainFooter";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPageLayout>
        <Home />
      </MainPageLayout>
      <MainPageLayout>
        <Gallery />
      </MainPageLayout>
      <MainFooter />
    </div>
  );
}
export default App;
