import { TThemeFromFn, tuple } from "../theming";

export const chipTheme = () =>
  tuple([
    "Chip",
    {
      height: "2rem", // '32px',
      backgroundColor: "#0000001f",
      borderRadius: "1rem", // '16px',
      padding: "0.5rem", // '8px',
      margin: "0 0.5rem 0 0",
      hover: {
        backgroundColor: "#00000029",
        iconColor: "#00000096",
      },
      icon: {
        color: "#00000066",
        size: "1.125rem", // '18px'
      },
      text: {
        color: "#000000de",
        size: "0.875rem", // '14px',
        transform: "none",
      },
    },
  ]);

export type ChipTheme = TThemeFromFn<typeof chipTheme>;
