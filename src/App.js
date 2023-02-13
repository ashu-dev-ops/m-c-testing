import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/helper/Footer";
import Navbar from "./components/helper/Navbar";
import Auth from "./components/pages/auth/Auth";
import ChatPage from "./components/pages/chatPage/ChatPage";
import Landing from "./components/pages/landing/Landing";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat-page" element={<ChatPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
