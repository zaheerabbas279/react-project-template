import React, { useState, useEffect } from "react";

export const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [isData, setIsData] = useState("");

  return (
    <ProjectContext.Provider
      value={{
        isData,
        setIsData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };
