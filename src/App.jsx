import React from "react";
import Header from "./components/Header";
import FloatingContact from "./components/FloatingContact";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import SocialPreview from "./components/SocialPreview";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="pages">
      <Header />
      <div className="content">
        <Profile />
        <Projects />
        <SocialPreview />
        <FloatingContact />
      <Summary />
      </div>
    </div>
  );
}

export default App;
