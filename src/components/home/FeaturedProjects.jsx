import Container from "../layout/Container.jsx";
import ProjectCard from "../projects/ProjectCard.jsx";
import "./FeaturedProjects.css";

const featuredProjects = [
  {
    title: "Task Tracker",
    description:
      "A focused task-management application for creating, completing, filtering, and saving everyday tasks.",
    technologies: ["React", "CSS", "localStorage"],
    status: "Planned",
  },
  {
    title: "Markdown Knowledge Base",
    description:
      "A searchable collection of Markdown articles organized with categories, tags, and readable article pages.",
    technologies: ["React", "Markdown", "JavaScript"],
    status: "Planned",
  },
  {
    title: "Job Application Tracker",
    description:
      "A practical dashboard for recording job applications, tracking their status, and reviewing application activity.",
    technologies: ["React", "CSS", "Data Storage"],
    status: "Planned",
  },
];

function FeaturedProjects() {
  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-projects-title"
    >
      <Container>
        <header className="featured-projects__heading">
          <p className="featured-projects__eyebrow">Selected Work</p>

          <h2 id="featured-projects-title">Featured Projects</h2>

          <p className="featured-projects__introduction">
            These projects will document my progression from focused frontend
            applications to more complete development tools.
          </p>
        </header>

        <ul className="featured-projects__grid">
          {featuredProjects.map((project) => (
            <li className="featured-projects__item" key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                status={project.status}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default FeaturedProjects;
