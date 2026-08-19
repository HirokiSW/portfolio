function SkillCard ({ category, items }) {
    return (
        <div className="skill-card">
            <h3>{ category }</h3>

            <ul className="skills-list">
                { items.map((item) => (
                    <li key={ item }>{ item }</li>
                )) }
            </ul>
        </div>
    )
}

export default SkillCard