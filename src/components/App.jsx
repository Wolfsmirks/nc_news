import { Routes, Route } from "react-router-dom";
import { Header } from "./page-contents/universal/Header";
import { Home, Topic, User, Article } from "./pages";
import { Footer } from "./page-contents/universal/Footer";
import { ErrorBoundry } from "./generic/ErrorBoundry";
import "./App.css";

function App() {
  return (
    <div className="app bg-[#fbdbaf]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic" element={<Topic />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorBoundry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
