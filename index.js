import React from "react"
import ReactDOM from "react-dom"
import About from "./components/about"
import Footer from "./components/footer"
import Info from "./components/info"
import Interests from "./components/interests"

function App() {
    return(
        <div className="App-body">
            <Info />
            <About />
            <Interests />
            <Footer />
        
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));