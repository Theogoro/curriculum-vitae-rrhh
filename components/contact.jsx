import React from "react";

export default function contact(props) {
  const redes = [
    {
      href: "https://twitter.com/theogor0",
      icon: "twitter",
      color: "warning",
    },
    {
      href: "https://github.com/theogoro",
      icon: "github",
      color: "dark",
    },
    {
      href: "https://www.linkedin.com/in/theo-berta-9a7b69152/",
      icon: "linkedin",
      color: "info",
    },
    {
      href: "https://www.instagram.com/theogor0/",
      icon: "instagram",
      color: "danger",
    },
  ];

  const contantWrapperStyle = {
    gap: ".5rem",
  };
  return (
    <div id="contact" className="contact container">
      <h2 className="text-center">Contáctame 📞</h2>
      <p className="text-center">👇Encontrame en mis redes sociales 👇</p>
      <div className="row justify-content-center" style={contantWrapperStyle}>
        {redes.map((e, key) => (
          <div className={`card bg-${e.color} h1 p-2`} key={key}>
            <a
              className={`fa fa-${e.icon} text-decoration-none text-white`}
              href={e.href}
              target="_blank"
            />
          </div>
        ))}
      </div>
      <p className="text-center m-0">Email 📧: theoberta@gmail.com</p>
      <p className="text-center mb-5">Telefono 🤳: 03548-15436949</p>
      <hr />
      <p className="text-muted font-italic text-center">
        13-11-2020 - Berta Theo
      </p>
    </div>
  );
}
