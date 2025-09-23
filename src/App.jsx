import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WhosWatching from "./pages/WhosWatching/WhosWatching";
import RecruiterPage from "./pages/Recruiter/RecruiterPage";
import DeveloperPage from "./pages/Developer/DeveloperPage";
import StalkerPage from "./pages/Stalker/StalkerPage";
import AdventurerPage from "./pages/Adventurer/AdventurerPage";
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
    <Routes>
      <Route path="/" element={<WhosWatching />} />
      <Route element={<Layout />}>
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/stalker" element={<StalkerPage />} />
        <Route path="/adventurer" element={<AdventurerPage />} />

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
  );
}

export default App;
