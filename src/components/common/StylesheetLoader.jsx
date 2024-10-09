import React, { useEffect } from "react";

const StylesheetLoader = ({ href }) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href]);

  return null;
};

export default StylesheetLoader;
