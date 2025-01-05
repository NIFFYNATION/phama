import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
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
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBlogSingle from "./pages/admin/CommentsModerator";
import CreatePost from "./pages/admin/CreatePost";
import EditPost from "./pages/admin/EditPost";
import AppointmentDashboard from "./pages/admin/AppointmentDashboard";
import DoctorAppointments from "./pages/admin/DoctorAppointments";

const serviceRoutes = [
  { path: "dental", element: <Dental />, title: "Dental" },
  { path: "cardiology", element: <Cardiology />, title: "Cardiology" },
  { path: "eyecare", element: <EyeCare />, title: "Eye Care" },
  { path: "endocrinology", element: <Endocrinology />, title: "Endocrinology" },
  { path: "orthopaedics", element: <Orthopaedics />, title: "Orthopaedics" },
  { path: "angioplasty", element: <Angioplasty />, title: "Angioplasty" },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />

          {/* Medical Services Routes */}
          {serviceRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* Other Routes */}
          <Route path="team" element={<Team />} />
          <Route path="teamsingle/:id" element={<TeamSingle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogsingle" element={<BlogSingle />} />
          <Route path="appointmentpage" element={<AppointmentPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogSingle />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/blog/:id" element={<AdminBlogSingle />} />
          <Route path="/admin/posts/create" element={<CreatePost />} />
          <Route path="/admin/posts/:id/edit" element={<EditPost />} />
          <Route
            path="/admin/appointments"
            element={<AppointmentDashboard />}
          />
          <Route path="/admin">
            <Route path="appointments" element={<AppointmentDashboard />} />
            <Route path="doctor-appointments" element={<DoctorAppointments />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
