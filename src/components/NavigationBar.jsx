import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <button>Toggle theme</button>
        </nav>
    )
}

export default NavigationBar