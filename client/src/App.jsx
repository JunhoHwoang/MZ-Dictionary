import HomePage from "./pages/Homepage";
import TermPage from "./pages/TermPage";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("Korean");
  console.log(language);
  return (
    <Router>
      <div className="flex w-full flex-col justify-center">
        <Header language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/term/:term" element={<TermPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
