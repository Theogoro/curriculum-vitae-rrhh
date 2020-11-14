import React from "react";

export default function hero(props) {
  const imgStyle = {
    width: "25vw",
  };
  return (
    <div id="hero" className="hero container mt-3">
      <div className="row justify-content-center">
        <img
          style={imgStyle}
          className="rounded-circle mb-2"
          src="/me.png"
          alt="Me photo"
        />
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="m-0">Hola 👋, yo soy</p>
          <h1 className="mb-1">Th&eacute;o Berta</h1>
          <p className="text-muted">Desarrollador Web 👨‍💻</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
