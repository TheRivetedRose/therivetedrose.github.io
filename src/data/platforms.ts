import {
  siUbuntu,
  siKalilinux,
  siMacos,
} from "simple-icons";

// Windows logo (4-panel) - not in simple-icons; custom path, official blue #0078D4
const WINDOWS_ICON = {
  path: "M0 0v11h11V0H0zm13 0v11h11V0H13zM0 13v11h11V13H0zm13 0v11h11V13H13z",
  hex: "0078D4",
};

export const platforms = [
  { name: "Windows", icon: WINDOWS_ICON },
  { name: "Ubuntu", icon: siUbuntu },
  { name: "Kali Linux", icon: siKalilinux },
  { name: "macOS", icon: siMacos, iconSlug: "macos" },
] as const;
