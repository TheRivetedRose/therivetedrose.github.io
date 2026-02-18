import {
  siPython,
  siCplusplus,
  siHtml5,
  siJavascript,
  siMysql,
  siPostgresql,
} from "simple-icons";

// Python official logo: blue #3776AB, yellow #FFD43B (PSF branding)
const PYTHON_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><defs><linearGradient id="python-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3776AB"/><stop offset="50%" style="stop-color:#3776AB"/><stop offset="50%" style="stop-color:#FFD43B"/><stop offset="100%" style="stop-color:#FFD43B"/></linearGradient></defs><path fill="url(#python-grad)" d="${siPython.path}"/></svg>`;

export const languages = [
  { name: "Python", icon: { svg: PYTHON_SVG } },
  { name: "C++", icon: siCplusplus },
  { name: "HTML", icon: siHtml5 },
  { name: "JavaScript", icon: siJavascript },
  { name: "SQL", icon: siMysql },
  { name: "PL/SQL", icon: siPostgresql },
] as const;
