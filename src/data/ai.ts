import { siCursor } from "simple-icons";

// ChatGPT logo - custom path, official green #10A37F
const CHATGPT_ICON = {
  path: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z",
  hex: "10A37F",
};

export const ai = [
  { name: "ChatGPT", icon: CHATGPT_ICON },
  { name: "Cursor", icon: siCursor, iconSlug: "cursor" },
] as const;
