import React, { useContext } from "react";
// import { LanguageContext } from "../context/LanguageContext";
import { languages } from "../utils/translate";
import { LanguageContext } from "@/context/LanguageContext";

const useLanguage = () => {
  const { language } = useContext(LanguageContext);
  return (text) => (!!languages[text] ? languages[text][language] : text);
};

export default useLanguage;