import React, {useState} from "react";
import skincareImage from "../images/skincare.png";
import cubesatImage from "../images/cubesat1.png";
import texasImage from "../images/texas.png";
import searchImage from "../images/websearchengine1.png";
import cycleImage from "../images/cyclecrave.png";
import chatbotImage from "../images/ria.png";

const projects = [
  {
    title: "Skincare.io",
    image: skincareImage,
    description: "Developed a user-friendly website that curates personalized skincare routines.",
    technologies: "React • Node.js • Next.js • TypeScript • Puppeteer • PostgreSQL",
  },
  {
    title: "CubeSat",
    image: cubesatImage,
    description: "Created a dashboard to visualize satellite research data and log events.",
    technologies: "React • TypeScript • Kafka",
  },
  {
    title: "Texas Hold'em",
    image: texasImage,
    description: "Designed an interactive simulation of the classic poker game Texas Hold'em.",
    technologies: "Python • Flask • JavaScript",
  },
  {
    title: "Web Search Engine",
    image: searchImage,
    description: "Developed a Python-based web crawler that indexes over 3,000 pages.",
    technologies: "Python • React",
  },
  {
    title: "CycleCrave",
    image: cycleImage,
    description: "Developed a mobile app offering personalized recommendations for managing food cravings and symptoms.",
    technologies: "React Native • Firebase • Expo • Xcode",
  },
  {
    title: "RIA Chatbot",
    image: chatbotImage,
    description: "Enhanced a chatbot interface to provide real-time assistance.",
    technologies: "Python • Hugging Face • Anthropic Claude • Meta Llama • AWS",
  },
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="projects" style={{ backgroundColor: "#f7f7f7", padding: "10px",}}>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "30px", fontWeight: "bold", color: "#9a9d68", marginLeft: "175px", marginBottom: "20px"}}>
                Projects
            </h2>
            <div
                className="project-list"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                    backgroundColor: "#ffffff",
                    border: "2px solid #9a9d68",
                    borderRadius: "10px",
                    padding: "20px",
                    marginLeft: "175px",
                    marginRight: "175px",
                }}
            >
                {projects.map((project, index) => (
                <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="project-box"
                        style={{
                            backgroundColor: index % 2 === 0 ? "#c4c78e" : "#9a9d68",
                            color: "#ffffff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            padding: "20px",
                            position: "relative",
                            overflow: "hidden",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
                        }}
                    >
                        <h3 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "20px", fontWeight: "bold" }}>{project.title}</h3>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                transition: "transform 0.3s ease",
                                transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                            }}
                        />
                        {hoveredIndex === index && (
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              backgroundColor: index % 2 === 0 ? "#c4c78e" : "#9a9d68",
                              display: "flex",
                              flexDirection: "column", // Align items in a column
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              textAlign: "center",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "16px",
                                padding: "20px", // Add padding for better readability
                              }}
                            >
                              {project.description}
                            </p>
                            <p
                              style={{
                                fontSize: "14px",
                                // color: "#eaeaea", // Slightly lighter color for distinction
                                padding: "20px",
                              }}
                            >
                              {project.technologies}
                            </p>
                        </div>
                      )}
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;