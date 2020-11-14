import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "../components/about";
import Skills from "../components/skills";
import Experence from "../components/experence";
import Contact from "../components/contact";

export default function index() {
  return (
    <div className="index">
      <Helmet>
        <title>Hola, soy Theo Berta 👋</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experence />
      <Contact />
    </div>
  );
}
