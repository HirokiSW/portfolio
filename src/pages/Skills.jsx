import skills from "../data/skills.js"
import SkillCard from "../components/SkillCard"

function Skills() {
    return (
        <main>
            <h1>Skills</h1>
            { skills.map((skill) => (
                <SkillCard key={ skill.id } { ...skill } />
            )) }
        </main>
    )
}

export default Skills