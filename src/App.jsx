import React from "react";
import Header from "./components/Header";
import FloatingContact from "./components/FloatingContact";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialPreview from "./components/SocialPreview";
import Summary from "./components/Summary"; 

function App() {
  return (
    <>
      <Header />
    <div className="pages">
      <Profile />
      <Projects />
      <SocialPreview />
      <FloatingContact />
    </div>
      <Summary />
    </>
  );
}

export default App;
