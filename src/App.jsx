import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyServizi from "./Components/MyServizi";
import MyHome from "./Components/MyHome";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MyProfile from "./Components/MyProfile";
import MyMembri from "./Components/MyMembri";
import MyPrenotazioni from "./Components/MyPrenotazioni";
import ServiceDetails from "./Components/ServiceDetails";
import PrenotazioneServizio from "./Components/PrenotazioneServizio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/membri" element={<MyMembri />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/Servizi" element={<MyServizi />} />
          <Route path="/mie-prenotazioni" element={<MyPrenotazioni />} />
          <Route path="/servizi/:id" element={<ServiceDetails />} />
          <Route path="" element={<MyHome />} />
          <Route path="/prenotazione-servizio" element={<PrenotazioneServizio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
