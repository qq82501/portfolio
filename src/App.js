import "./App.css";
import AboutSection from "./components/section/AboutSection";
import Footer from "./components/section/Footer";
import LandingPage from "./components/section/LandingPage";
import WorkSection from "./components/section/WorkSection";

function App() {
  return (
    <>
      <LandingPage />
      <AboutSection />
      <WorkSection />
      <Footer />
    </>
  );
}

export default App;
