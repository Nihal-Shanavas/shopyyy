import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
