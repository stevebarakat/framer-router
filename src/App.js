import "./App.css";
import { Routes, Route } from "react-router-dom";
import FramerMotion from "./components/FramerMotion";
import ReactRouter from "./components/ReactRouter";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route element={<Layout />}>
          <Route index element={<h1>Hello!</h1>} />
          <Route path="motion" element={<FramerMotion />} />
          <Route path="router" element={<ReactRouter />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
