import { useState } from "react";

import penMarked from "../assets/collage/pen-marked.png";
import megaphone from "../assets/collage/megaphone.png";

import Icon from "./icon.jsx";

import "../styles/skill.css";

function Skill() {
  const skills = [
    { 
      "dart": "Optimized for building cross-platform mobile, desktop, and web apps. Strongly typed and works seamlessly with Flutter for high-performance UI development.", 
      "javascript": "The core language of the web, enabling dynamic and interactive user experiences on both frontend and backend (Node.js).", 
      "html": "Defines the structure and semantic layout of web pages, forming the backbone of any website or web application.", 
      "css": "Styles web pages for responsive, modern, and accessible designs. Supports Flexbox, Grid, and animations.", 
      "java": "A robust, object-oriented programming language used for Android apps, enterprise solutions, and backend systems.", 
    },
    {
      "flutter": "A cross-platform UI toolkit by Google for building natively compiled applications from a single codebase. Ideal for mobile, desktop, and web.", 
      "react": "A JavaScript library for building fast, component-based UIs with a virtual DOM for optimal performance.", 
      "nodejs": "A JavaScript runtime built on Chrome's V8 engine, enabling server-side development with asynchronous, event-driven architecture.", 
      "express": "A lightweight, unopinionated Node.js framework for building REST APIs and server-side applications efficiently.",
    },
    { 
      "firebase": "Google's Backend-as-a-Service (BaaS) platform offering real-time databases, authentication, hosting, and analytics.", 
      "mongodb": "A NoSQL database that stores data in flexible, JSON-like documents for high scalability and speed.", 
      "supabase": "An open-source Firebase alternative with PostgreSQL database, authentication, and storage services.", 
      "mysql": "A reliable relational database management system widely used for structured data storage and transactional applications.",
    },
    {
      "figma": "A collaborative UI/UX design tool for creating prototypes, wireframes, and responsive layouts in real time.", 
      "drawio": "A diagramming tool for creating system architectures, flowcharts, and entity-relationship diagrams.", 
      "git": "A distributed version control system for tracking code changes, enabling efficient collaboration in software development.",
    }
  ];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("Click an icon to learn more!");
  const [rotation, setRotation] = useState(0);

  function handleClick(event, name) {
    setName(name);
    setDescription(event.currentTarget.dataset.description);
    setRotation(Math.floor(Math.random() * 61) - 30);
  }

  return (
    <section id="skill">
      <h2>Skill</h2>
      <p className="content">My technical expertise spans across various technologies, with a focus on modern development tools and frameworks.</p>
      <div id="skill-list">
        {skills.map((group, index) => (
          <div key={index} className="skill-group">
            {Object.entries(group).map(([skillName, skillDescription]) => (
              <div key={skillName} className="collage-container">
                <img 
                  src={penMarked} 
                  alt="Collage Pen Marked" 
                  className={`collage ${name === skillName ? 'show' : ''}`}
                  style={{
                    transform: name === skillName ? `rotate(${rotation}deg)` : 'rotate(0deg)',
                  }}
                />
                <Icon 
                  iconKey={skillName} 
                  data-description={skillDescription}
                  onClick={(event) => handleClick(event, skillName)} 
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <img id="megaphone" src={megaphone} alt="Collage Megaphone" className="collage" />
      {name && <h3>{name}</h3>}
      <p style={{ textAlign: name ? "left" : "center" }} className="content">{description}</p>
    </section>
  );
}

export default Skill;