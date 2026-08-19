import contact from "../data/contact.js"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href={`mailto:${contact.email}`}>Email</a>
                <a href={contact.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer