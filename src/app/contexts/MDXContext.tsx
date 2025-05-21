import { createContext } from "react";

export const MDXContext = createContext<{
  title: string;
  subtitle: string;
  setTitle: (title: string) => void;
  setSubtitle: (subtitle: string) => void;
}>({
  title: "",
  subtitle: "",
  setTitle: () => {},
  setSubtitle: () => {},
});
