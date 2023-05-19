import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="Admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
