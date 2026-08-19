import home from "../data/home"

function Home() {
    return (
        <main>
            <h1>Home</h1>
            <p>{ home.name }</p>
            <p>{ home.tagline }</p>
            <p>{ home.intro }</p>
        </main>
    )
}

export default Home