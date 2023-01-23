import React from "react";
import Header from "../components/Header";

function About() {
    return (
        <div className="about">
            <Header />
            <div className="aboutBody">
            <h1>What is Konnect uZ?</h1>
                <p>Konnect uZ is an open source full CRUD app built using the MERN stack for our unit 3 project. Konnect uZ is a social media app that allows non users to look at the feed. When a user signs up they can interact with other user's feed post and make their own post. Konnect uZ was founded by Drew Anello, Peter Lam, James Ocana and Kyler Marquis in October of 2022.</p>
            </div>
            <div className="creators">
        <div className="dev">
            <div className="dev-content">
                <div className="dev-name">
                    <h1>Drew Anello</h1>
                </div>
                <div className="dev-img">
                    <img src="https://i.imgur.com/FV8FVeW.jpg" alt=""></img>
                </div>
                <div className="dev-about-info">
                    Hello! Thanks for clicking on About Me. I am Drew, a musician turned dev based in NYC. Konnect with me on <a className="konnectwith" href="https://github.com/drew-anello" target= "_blank">GitHub</a> and <a className="konnectwith" href="https://www.linkedin.com/in/drew-anello/" target= "_blank">LinkedIn</a>. <br/>
                    Please feel free to contact me if you have any questions or inquiries! <br/>
                </div>
            </div>
        </div>

        <div className="dev">
            <div className="dev-content">
                <div className="dev-name">
                    <h1>Peter Lam</h1>
                </div>
                <div className="dev-img">
                    <img src="https://i.imgur.com/Z2sVB9m.png" alt=""></img>
                </div>
                <div className="dev-about-info">
                    Hey! My name is Peter Lam and I'm an audio engineer & music producer transition into a career in tech. <br/> Konnect with me on <a className="konnectwith" href="https://github.com/plam1216" target= "_blank">GitHub</a> and <a className="konnectwith" href="https://www.linkedin.com/in/plam1216/" target= "_blank">LinkedIn</a>. <br/>
                </div>
            </div>
        </div>
        <div className="dev">
            <div className="dev-content">
                <div className="dev-name">
                    <h1>James Ocaña</h1>
                </div>
                <div className="dev-img">
                    <img src="https://i.imgur.com/cnU0ThQ.jpg" alt=""></img>
                </div>
                <div className="dev-about-info">
                    Hi! I am James Ocana, a chemical engineer on a new path in software engineering. Konnect with me on <a className="konnectwith" href="https://github.com/jamesocana6" target= "_blank">GitHub</a> and <a className="konnectwith" href="https://www.linkedin.com/in/james-ocana/" target= "_blank">LinkedIn</a>. <br/>
                    Please feel free to contact me if you have any questions or inquiries! <br/>
                </div>
            </div>
        </div>
        <div className="dev" style={{marginBottom: 50}}>
            <div className="dev-content">
                <div className="dev-name">
                    <h1>Kyler Marquis</h1>
                </div>
                <div className="dev-img">
                    <img src="https://i.imgur.com/eQOHF9N.png" alt=""></img>
                </div>
                <div className="dev-about-info">
                    Yo! Thanks for checking out our site! I am Kyler and I'm super excited to gain more knowledge in this field. <br/>
                    Konnect with me on <a className="konnectwith" href="https://github.com/CodingJedi12" target= "_blank">GitHub</a> and <a className="konnectwith" href="https://www.linkedin.com/in/kylermarquis/" target= "_blank">LinkedIn</a>. <br/>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default About