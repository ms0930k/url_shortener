export const themes = {
  dark: {
    background: "#0F172A",
    surface: "#1E293B",
    primary: "#3B82F6",
    secondary: "#06B6D4",
    text: "#F8FAFC",
    border: "#334155",
  },

  light: {
    background: "#FFFFFF",
    surface: "#F8FAFC",
    primary: "#2563EB",
    secondary: "#0891B2",
    text: "#0F172A",
    border: "#CBD5E1",
  },
};

export type ThemeName = keyof typeof themes;