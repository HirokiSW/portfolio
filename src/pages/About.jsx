import about from "../data/about.js"

function About() {
    return (
        <main>
            <h1>About</h1>
            <p>
                <b>Bio: </b>{ about.bio }
            </p>
            <p>
                <b>Education: </b>{ about.education }
            </p>
            <p>
                <b>Interests: </b>{ about.interests }
            </p>
        </main>
    )
}

export default About