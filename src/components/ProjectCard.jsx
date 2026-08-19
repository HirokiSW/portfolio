function ProjectCard({ title, description, stack, githubUrl, demoUrl }) {
    return (
        <div className="project-card">
            <h3>{ title }</h3>
            <p>{ description }</p>

            <ul className="stack-list">
                { stack.map((item) => (
                    <li key={ item }>{ item }</li>
                )) }
            </ul>

            <div className="project-links">
                <a href={ githubUrl } target="_blank" rel="noreferrer">GitHub</a> <br />
                { demoUrl && (
                    <a href={ demoUrl } target="_blank" rel="noreferrer">Demo</a>
                ) }
            </div>
        </div>
    )
}

export default ProjectCard