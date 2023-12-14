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
      <Hero id="home" />
      <About id="Me" />
      <TechStack id="tc" />
      <hr />
      <RecentWork id="project" />
      <Contact id="contact" />
      <Social />
    </div>
  );
}

export default App;
