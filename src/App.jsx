import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<Header />} />
            <Route path="blog" element={<Header />} />
            <Route path="projects" element={<Header />} />
        </Routes>
    );
}

export default App;
