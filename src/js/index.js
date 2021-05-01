//Font Awesome
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

//Custom style
import "../scss/main.scss";

//Favicon
import "../assets/favicon-32x32.png";

//Header
import "./header";
import BgHeader from "./classBgHeader";
const bg = new BgHeader();
bg.insertBgHeader();

//Main
import "./mainContent";
import "../assets/illustration-laptop-desktop.png";
import "../assets/illustration-laptop-mobile.png";
import "../assets/bg-pattern-circles.png";
