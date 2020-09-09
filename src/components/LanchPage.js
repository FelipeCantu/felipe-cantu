import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faJs }  from '@fortawesome/free-brands-svg-icons';

const LanchPage = () => {
    return (

        <div id="bg">
            <header>
                <img src="images/felipelogo.png" alt="Logo" />
                <a href="#">Felipe Cantu Jr</a>
            </header>

            <main>
                <section id="card">
                    <ul>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faReact} />
                                <strong>Front-End Developer</strong>
                            </span>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faPython} />
                                <strong>Back-End Developer</strong>
                            </span>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faJs} />
                                <strong>Lets make some things happen</strong>
                            </span>
                        </li>
                    </ul>
                </section>
                <section id="primary">
                    <h1>Hello, My Name is Felipe Cantu Jr.</h1>
                    <p>I am Your Full Stack Developer</p>

                    <a href="#">My Work</a>
                </section>
            </main>

        </div>

    )
}

export default LanchPage;
