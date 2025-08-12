import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Article, Home, Topic, User } from "./pages";
import { Header } from "./page-contents/universal/Header";
import { Footer } from "./page-contents/universal/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/user" element={<User />} />
        <Route path="/articles/:article" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
