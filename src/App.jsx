import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import PageNotFound from "./pages/PageNotFound";
import Dental from "./pages/Dental";
import Angioplasty from "./pages/Angioplasty";
import Cardiology from "./pages/Cardiology";
import EyeCare from "./pages/EyeCare";
import Endocrinology from "./pages/Endocrinology";
import Orthopaedics from "./pages/Orthopaedics";
import AppointmentPage from "./pages/AppointmentPage";
import BlogSingle from "./pages/BlogSingle";
import Blog from "./pages/Blog";
import TeamSingle from "./pages/TeamSingle";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="dental" element={<Dental />} />
          <Route path="angioplasty" element={<Angioplasty />} />
          <Route path="cardiology" element={<Cardiology />} />
          <Route path="eyecare" element={<EyeCare />} />
          <Route path="endocrinology" element={<Endocrinology />} />
          <Route path="orthopaedics" element={<Orthopaedics />} />
          <Route path="team" element={<Team />} />
          <Route path="teamsingle" element={<TeamSingle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogsingle" element={<BlogSingle />} />
          <Route path="appointmentpage" element={<AppointmentPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
