import {
  siWireshark,
  siGit,
  siGithub,
  siVmware,
  siAstro,
  siTailwindcss,
} from "simple-icons";

// Colored SVGs with brand colors embedded
const WIRESHARK_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Wireshark</title><path fill="#1679A7" d="${siWireshark.path}"/></svg>`;
const GIT_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path fill="#F05032" d="${siGit.path}"/></svg>`;
// VMware official: PMS Cool Gray 11 (#53565A) per brand guidelines; white on dark backgrounds
const VMWARE_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>VMware</title><path fill="#53565A" d="${siVmware.path}"/></svg>`;
const ASTRO_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Astro</title><path fill="#BC52EE" d="${siAstro.path}"/></svg>`;
const TAILWIND_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path fill="#06B6D4" d="${siTailwindcss.path}"/></svg>`;

export const tools = [
  { name: "Wireshark", icon: { svg: WIRESHARK_SVG } },
  { name: "Git", icon: { svg: GIT_SVG } },
  { name: "GitHub", icon: siGithub, iconSlug: "github" },
  { name: "VMware", icon: { svg: VMWARE_SVG }, iconSlug: "vmware" },
  { name: "Astro", icon: { svg: ASTRO_SVG } },
  { name: "Tailwind CSS", icon: { svg: TAILWIND_SVG } },
] as const;
