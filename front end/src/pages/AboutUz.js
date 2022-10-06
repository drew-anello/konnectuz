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
        <div className="drew">
            <h1> Drew Anello</h1>
            <img src="https://i.imgur.com/FV8FVeW.jpg"></img>
            <p>Drew Anello is a musician turned dev based in NYC.</p>
            <a className="konnectwith" href="https://www.linkedin.com/in/drew-anello/">Konnect with Drew</a>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        </div>
        <div className="peter">
            <h1>Peter Lam</h1>
            <img src="https://i.imgur.com/Z2sVB9m.png"></img>
            <p>filler text change</p>
            <a className="konnectwith" href="https://www.linkedin.com/in/plam1216/">Konnect with Peter</a>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            
        </div>
        <div className="james">
            <h1>James Ocaña</h1>
            <img src="https://i.imgur.com/cnU0ThQ.jpg"></img>
            <p>filler text</p>
            <a className="konnectwith" href="https://www.linkedin.com/in/james-ocana/">Konnect with James</a>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        </div>
        <div className="kyler">
            <h1>Kyler Marquis</h1>
            <img src="https://i.imgur.com/eQOHF9N.png"></img>
            <p>filler text</p>
            <a className="konnectwith" href="https://www.linkedin.com/in/kylermarquis/">Konnect with Kyler</a>
        </div>
        </div>
        </div>
    )
}
export default About