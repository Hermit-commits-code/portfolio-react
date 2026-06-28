import "./ProjectCard.css";

function ProjectCard({ title, description, technologies, status }) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <p className="project-card__status">{status}</p>
        <h3 className="project-card__title">{title}</h3>
      </div>
      <p className="project-card__description">{description}</p>
      <ul
        className="project-card__technologies"
        aria-label={`${title} technologies`}
      >
        {technologies.map((technology) => (
          <li className="project-card__technology" key={technology}>
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
export default ProjectCard;
