import Header from "./components/HeaderComponents"
import Main from "./components/MainComponents"
import Footer from "./components/FooterComponents"
import posts from "./data/post"

function App() {
    return (
        <>
            <Header />
            <Main newArray={posts} />
            <Footer />
        </>
    )
}

export default App
