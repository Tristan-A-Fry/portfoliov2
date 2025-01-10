
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;

