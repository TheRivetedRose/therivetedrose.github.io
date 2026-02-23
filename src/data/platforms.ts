import { siUbuntu, siApple } from "simple-icons";

// Windows logo (4-panel) - not in simple-icons; custom path, official blue #0078D4
const WINDOWS_ICON = {
  path: "M0 0v11h11V0H0zm13 0v11h11V0H13zM0 13v11h11V13H0zm13 0v11h11V13H13z",
  hex: "0078D4",
};

// Kali Linux: NetHunter dragon logo (™ OffSec) - more visible than text mark
// https://www.kali.org/docs/policy/trademark/
const KALI_DRAGON_URL =
  "https://www.kali.org/docs/policy/trademark/kali-nethunter-dragon-tm.png";

export const platforms = [
  { name: "Windows", icon: WINDOWS_ICON },
  { name: "Ubuntu", icon: siUbuntu, iconSlug: "ubuntu" },
  { name: "Kali Linux", icon: { imgSrc: KALI_DRAGON_URL }, iconSlug: "kali" },
  { name: "macOS", icon: siApple, iconSlug: "apple" },
] as const;
