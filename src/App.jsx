import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
        </Routes>
    );
}

export default App;
