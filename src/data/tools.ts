import {
  siWireshark,
  siGit,
  siGithub,
  siVirtualbox,
  siAstro,
  siTailwindcss,
} from "simple-icons";

export const tools = [
  { name: "Wireshark", icon: siWireshark },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub, iconSlug: "github" },
  { name: "VirtualBox", icon: siVirtualbox },
  { name: "Astro", icon: siAstro },
  { name: "Tailwind CSS", icon: siTailwindcss },
] as const;
