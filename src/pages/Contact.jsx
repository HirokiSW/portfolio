import contact from "../data/contact.js"

function Contact() {
    return (
        <main className="page page-contact">
            <h1>Contact</h1>
            <p>
                <b>Email: </b><a href={`mailto:${contact.email}`}>{ contact.email }</a>
            </p>
            <p>
                <b>GitHub: </b><a href={ contact.githubUrl } target="_blank" rel="noreferrer">{ contact.githubUrl }</a>
            </p>
            <p>
                <b>LinkedIn: </b><a href={ contact.linkedinUrl } target="_blank" rel="noreferrer">{ contact.linkedinUrl }</a>
            </p>
            <p>
                <b>Resume: </b><a href={ contact.resumeUrl } target="_blank" rel="noreferrer">{ contact.resumeUrl }</a>
            </p>
        </main>
    )
}

export default Contact