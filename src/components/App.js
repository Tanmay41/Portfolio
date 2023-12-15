import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import RecentWork from "./RecentWork";
import Contact from "./Contact";
import Social from "./Social";

import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <hr />
      <RecentWork />
      <Contact />
      <Social />
      <SpeedInsights/>
    </div>
  );
}

export default App;
