
import React from "react";
import imageBg from '../assets/images/image.png'

function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center text-white bg-cover bg-center"
            style={{
                backgroundImage: `url(${imageBg})`, // Replace with your image path
            }}
        >
            <div className="text-center">
                <h1 className="text-5xl font-bold">Tristan Fry</h1>
                <p className="mt-4 text-lg">Discover my projects and skills below.</p>
            </div>
        </section>
    );
}

export default Home;

