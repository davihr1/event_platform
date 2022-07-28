import { BrowserRouter, Route, Routes } from "react-router-dom";

import { User } from './pages/User';
import { Event } from './pages/Event';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/Event" element={<Event />} />
    </Routes>
  </BrowserRouter>
  );
}
