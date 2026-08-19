import projects from "../data/projects.js"
import ProjectCard from "../components/ProjectCard"

function Projects() {
    return (
        <main className="page page-projects">
            <h1>Projects</h1>
            { projects.map((proj) => (
                <ProjectCard key={ proj.id } { ...proj } />
            )) }
        </main>
    )
}

export default Projects