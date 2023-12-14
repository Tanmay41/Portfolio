import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import RecentWork from "./RecentWork";
import Contact from "./Contact";
import Social from "./Social";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <hr />
      <RecentWork />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
