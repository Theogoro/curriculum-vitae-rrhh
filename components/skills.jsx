import React from "react";

export default function skills(props) {
  const skillsWrapperStyles = {
    gap: ".5rem",
  };
  const skills = [
    {
      text: "Desarrollo Web 🌐",
      color: "success",
    },
    {
      text: "JavaScrip 🐱‍🏍",
      color: "warning",
    },
    {
      text: "CSS 🎨",
      color: "info",
    },
    {
      text: "Python 🐍",
      color: "danger",
    },
    {
      text: "React JS ⚛",
      color: "dark",
    },
    {
      text: "Svelte 👾",
      color: "secondary",
    },
    {
      text: "Photoshop ✍",
      color: "success",
    },
    {
      text: "Edición de contenido audiovisual 🎥",
      color: "primary",
    },
    {
      text: "Sistemas linux🐧",
      color: "warning",
    },
    {
      text: "Redes e internet 📶",
      color: "danger",
    },
    {
      text: "Bases de datos 💿",
      color: "secondary",
    },
    {
      text: "Informática 🖥",
      color: "info",
    },
    {
      text: "Java ♨",
      color: "primary",
    },
  ];
  return (
    <div id="skills" className="skills container mt-3">
      <h2 className="text-center">Habilidades ✨</h2>
      <p className="mb-1 text-center">Actualmente poseo conocimientos en</p>
      <div
        style={skillsWrapperStyles}
        className="skills-wrapper row justify-content-center mb-2"
      >
        {skills.map((e, key) => (
          <div key={key} className={`card text-white bg-${e.color}`}>
            <div className="card-header">{e.text}</div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
