import { createContext } from "react";

export const initialFormData = {
  day: undefined,
  month: undefined,
  year: undefined,
};

export const FormContext = createContext(null);
