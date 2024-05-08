import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import Join from "./pages/Join/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Join />} />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
