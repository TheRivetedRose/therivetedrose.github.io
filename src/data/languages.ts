import {
  siPython,
  siCplusplus,
  siHtml5,
  siJavascript,
} from "simple-icons";

// Python official logo: blue #3776AB, yellow #FFD43B (PSF branding)
const PYTHON_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><defs><linearGradient id="python-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3776AB"/><stop offset="50%" style="stop-color:#3776AB"/><stop offset="50%" style="stop-color:#FFD43B"/><stop offset="100%" style="stop-color:#FFD43B"/></linearGradient></defs><path fill="url(#python-grad)" d="${siPython.path}"/></svg>`;

// Colored SVGs with brand colors embedded (C++ #00599C, HTML5 #E34C26 W3C, JS #F7DF1E)
const CPLUSPLUS_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C++</title><path fill="#00599C" d="${siCplusplus.path}"/></svg>`;
const HTML5_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path fill="#E34C26" d="${siHtml5.path}"/></svg>`;
const JAVASCRIPT_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path fill="#F7DF1E" d="${siJavascript.path}"/></svg>`;

export const languages = [
  { name: "Python", icon: { svg: PYTHON_SVG } },
  { name: "C++", icon: { svg: CPLUSPLUS_SVG } },
  { name: "HTML", icon: { svg: HTML5_SVG } },
  { name: "JavaScript", icon: { svg: JAVASCRIPT_SVG } },
  { name: "SQL - PL/SQL", icon: { imgSrc: "/img/icons/plsql.png" }, iconSlug: "plsql" },
] as const;
