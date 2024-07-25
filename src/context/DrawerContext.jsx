import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [open, setToggledOpen] = useState(false);

  const toggleOpen = (value) => {
    setToggledOpen(value);
  };

  return (
    <ToggleContext.Provider value={{ open, toggleOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};
