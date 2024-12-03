import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    function toggleAccordion(id) {
        const content = document.getElementById(id);
        const button = content.previousElementSibling;
        const allContents = document.querySelectorAll('.accordion-content');
        const allButtons = document.querySelectorAll('.accordion-button');
        
        allContents.forEach(function (otherContent) {
            if (otherContent !== content) {
                otherContent.style.maxHeight = null;
                otherContent.previousElementSibling.classList.remove('active');
            }
        });

        allButtons.forEach(function (otherButton) {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'; 
        }

        button.classList.toggle('active');
    }

    return (
        <>
            <header></header>
            <div className="content1">
                <div className="image-section1">
                    <Image
                        src="/abtus_img.png"
                        alt="Group of trainees at Honey Treat Academy"
                        width={230}
                        height={230}
                    />
                </div>
                <div className="text-section1">
                    <h1>
                        <span className="blue-text">Digital Skills at Honeytreat Academy
                        </span>
                    </h1>
                    <p>
                        Honeytreat Academy is a leading training institute specializing in
                        digital skills. Our mission is to empower individuals with the knowledge
                        and certifications needed to excel in today’s technology-driven world.
                        We offer specialized courses in web development, data analysis, digital
                        marketing, and photography. Our blended learning approach combines
                        classroom instruction, hands-on practical sessions, and exposure to
                        modern technologies to equip our trainees with relevant, in-demand
                        skills.
                    </p>
                    <p>
                        With over a decade of experience through Honeytreat Limited, our parent
                        company, we are committed to delivering excellence and professionalism.
                        By focusing on digital skill training, we prepare our students to meet
                        the evolving demands of today’s economy. Whether for individuals seeking
                        new opportunities or organizations requiring skilled professionals,
                        Honeytreat Academy ensures that every graduate is equipped to succeed in
                        a competitive market.
                    </p>
                </div>
            </div>
            <div className="content">
                <div className="text-section">
                    <section>
                        <h1>
                            <span className="blue-text">Building Digital Expertise for a Thriving Future</span>
                        </h1>
                        <p>
                            We are committed to providing internationally recognized training in
                            the digital sector in Nigeria. Our blended learning program combines
                            classroom-style teaching, hands-on practical sessions, and exposure to
                            relevant technologies. We offer training in essential digital skills
                            such as web development, data analysis, digital marketing, and
                            photography. This approach equips our students with the expertise
                            needed to thrive in the growing digital economy.
                        </p>
                        <p>
                            With over a decade of experience through Honeytreat Limited, our
                            parent company, we are driven by a passion for delivering quality
                            services to individuals and businesses. By focusing on digital skills
                            training, we prepare our graduates for a wide range of job
                            opportunities, making them valuable assets in today’s workforce.
                        </p>
                    </section>
                    <div className="accordion">
                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleAccordion('mission')}
                            >
                                <h2>Our Mission</h2> 
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChevronUp} className="fas fa-chevron-up" />
                                </span>  
                            </button>
                            <div className="accordion-content" id="mission">
                                <p>
                                    Our Mission is to empower individuals and transform society by
                                    making skills the catalyst for national productivity and
                                    prosperity by:
                                </p>
                                <ol>
                                    <li>
                                        Bridging the gap between education and employment, equipping
                                        individuals with the tools to excel in a changing economy.
                                    </li>
                                    <br />
                                    <li>
                                        Nurturing a skilled workforce, we unlock our nation's full
                                        potential for sustainable growth and shared prosperity.
                                    </li>
                                    <br />
                                    <li>
                                        Together, we shape a society that values talents, offers
                                        abundant opportunities, and fuels economic advancement.
                                    </li>
                                    <br />
                                </ol>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleAccordion('vision')}
                            >
                                <h2>Our Vision</h2>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChevronUp} className="fas fa-chevron-up" />
                                </span>
                            </button>
                            <div className="accordion-content" id="vision">
                                <p>
                                    To have a society where skill becomes a catalyst for national
                                    productivity and prosperity.
                                </p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleAccordion('goal')}
                            >
                                <h2>Our Goal</h2>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChevronUp} className="fas fa-chevron-up" />
                                </span>
                            </button>
                            <div className="accordion-content" id="goal">
                                <p>
                                    To build an establishment that will provide competent construction
                                    workforce for Africa first and then the World.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    <Image
                        src="/abtus2_img.jpeg"
                        alt="Group of trainees at Honey Treat Academy"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </>
    );
};

export default About;
