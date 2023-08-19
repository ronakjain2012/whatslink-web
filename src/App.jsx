import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth, Main } from "@/layouts";
import './scss/index.scss'
function App() {
  return (
    <Routes>
      <Route path="*" element={<Main />} exact />
    </Routes>
  );
}

export default App;
