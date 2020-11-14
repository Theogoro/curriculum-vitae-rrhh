import React from "react";

export default function About(props) {
  return (
    <div id="about" className="about container text-center">
      <h2 className="text-center">Acerca de 🙋‍♂️</h2>
      <p className="text-center m-1">
        Soy un desarrollador web, tengo 17 años 👶, vivó en La Falda, Cordoba 🇦🇷
        🏞, me gusta el rock 🤘 y soy apasionado del desarrollo de software 🚀 y
        sigo la idea de <span className="text-info">#nuncaPararDeAprender</span>{" "}
        💪. Actualmente estoy estudiando 🏗 en{" "}
        <a href="https://latecnicalf.com.ar/" target="_blank">
          ITLF
        </a>{" "}
        y{" "}
        <a href="https://platzi.com/@Theogor0/" target="_blank">
          Platzi (Ver certificados)
        </a>
        .
      </p>
      <p className="m-1">Futuro Tecnico medio en desarrollo de software 👨‍🎓.</p>
      <p className="text-muted font-italic m-1">
        Actualmente dispongo de disponibilidad fulltime y movilidad propia
      </p>
      <hr />
    </div>
  );
}
