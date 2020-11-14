import React from "react";

export default function navbar(props) {
  const items = [
    {
      text: "Yo 👨‍💻",
      href: "#hero",
    },
    {
      text: "Acerca de 🙋‍♂️",
      href: "#about",
    },
    {
      text: "Habilidades ✨",
      href: "#skills",
    },
    {
      text: "Experiencias ⌛",
      href: "#experence",
    },
    {
      text: "Contáctame 📞",
      href: "#contact",
    },
  ];

  function toggle() {
    document.getElementById("navbarNav").classList.toggle("show");
  }
  return (
    <div className="navbar navbar-light navbar-expand-md border-bottom">
      <div className="navbar-brand">📰 Th&eacute;o Berta</div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {items.map((e, key) => (
            <li className="nav-item" key={key}>
              <a className="nav-link" href={e.href}>
                {e.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
