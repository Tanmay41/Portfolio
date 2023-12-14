import React from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";

function RecentWork() {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light font-weight-bold">My Recent Work</h1>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary text-center">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecentWork;
