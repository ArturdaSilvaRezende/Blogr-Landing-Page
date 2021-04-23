// -------- designed section --------

//desktop img
import "../assets/illustration-editor-desktop.png";
//mobile img
import "../assets/illustration-editor-mobile.png";

// -------- state section --------

//bg phone
import "../assets/illustration-phones.png";

const svgCircle =
  '<svg width="1014" height="1018" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1 0 0 -1 0 1018)" fill="none" fill-rule="evenodd"><rect fill="#3E4062" x="213" y="214" width="588" height="590" rx="294"/><rect stroke="#878D92" opacity=".5" x=".5" y=".5" width="1013" height="1017" rx="506.5"/><rect stroke="#878D92" x="170.5" y="171.5" width="673" height="675" rx="336.5"/></g></svg>';
const svgCircle64 = window.btoa(svgCircle);

const imgCircle = document.querySelector(".containerState");
imgCircle.style.background =
  "url('data:image/svg+xml;base64," + svgCircle64 + "')";
imgCircle.style.backgroundPosition = "-200px 83%";
imgCircle.style.backgroundSize = "79% -100%";
imgCircle.style.backgroundRepeat = "no-repeat";
