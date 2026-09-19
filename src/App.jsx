import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhosWatching from "./pages/WhosWatching/WhosWatching";
import ProfilePage from "./pages/Profile/ProfilePage";
import DetailPage from "./pages/DetailPage/DetailPage";

// ✅ Create these placeholder pages
import WorkExperiencePage from "./pages/WorkExperience/WorkExperiencePage";
import SkillsPage from "./pages/Skills/SkillsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ContactPage from "./pages/Contact/ContactPage";
import CertificationsPage from "./pages/Certifications/CertificationsPage";
import MusicPage from "./pages/Music/MusicPage";
import ReadingPage from "./pages/Reading/ReadingPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WhosWatching />} />
        <Route element={<Layout />}>
          <Route path="/recruiter" element={<ProfilePage profile="recruiter" />} />
          <Route path="/developer" element={<ProfilePage profile="developer" />} />
          <Route path="/stalker" element={<ProfilePage profile="stalker" />} />
          <Route
            path="/adventurer"
            element={<ProfilePage profile="adventurer" />}
          />

          {/* Navbar links */}
          <Route path="/work-experience" element={<WorkExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact-me" element={<ContactPage />} />

          {/* cards links */}
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/reading" element={<ReadingPage />} />

          {/* Dynamic detail */}
          <Route path="/:profile/:section" element={<DetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
