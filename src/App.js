import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/section/Footer";
import LandingPage from "./components/section/LandingPage";
import WorkSection from "./components/section/WorkSection";
import AboutSection from "./components/section/AboutSection";

function App() {
  const dispatch = useDispatch();
  const { deviceMode } = useSelector((state) => state);

  useEffect(() => {
    const sectionLandingEl = document.querySelector("#section-hero");
    const navBarEl = document.querySelector("#nav-bar");
    const landingSectionObserver = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) navBarEl.classList.remove("sticky");
        if (!entries.isIntersecting) {
          navBarEl.classList.add("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    landingSectionObserver.observe(sectionLandingEl);
    window.addEventListener("resize", (e) => {
      const width = e.target.innerWidth;
      if (width < 900) {
        dispatch({ type: "SET_DEVICE_MODE", payload: "mobile" });
      } else {
        dispatch({ type: "SET_DEVICE_MODE", payload: "pc" });
      }
    });
  }, [dispatch]);
  return (
    <div className={deviceMode === "mobile" ? "mobile" : "pc"}>
      <LandingPage />
      <AboutSection />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default App;
