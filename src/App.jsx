import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import DoctorSerice from "./service/doctor.service";
import SpecialityService from "./service/speciality.service";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import AboutDoctor from "./pages/about/aboutDoctor";

function App() {
  const dispatch = useDispatch();
  const { specialities } = useSelector((state) => state.speciality);

  useEffect(() => {
    DoctorSerice.getDoctors(dispatch);
    SpecialityService.getSpecialities(dispatch);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors/:id" element={<AboutDoctor />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
