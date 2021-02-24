import React, { createContext, useContext, useState } from "react";


const ConfigurationContext = createContext();

const ConfigurationContextProvider = props => {

  const [logoURL, setLogoURL] = useState('')
  const [spaceName, setSpaceName] = useState('')
  const [spaceURL, setSpaceURL] = useState('')
  const [cantidadIndex, setCantidadIndex] = useState(0)
  const [colorTheme, setColorTheme] = useState("#48B5FE")
  
  const instanceConfig = {
    logoURL, setLogoURL,
    spaceName, setSpaceName,
    spaceURL, setSpaceURL,
    cantidadIndex, setCantidadIndex,
    colorTheme, setColorTheme
  };

  return (
    <ConfigurationContext.Provider value={instanceConfig}>
      {props.children}
    </ConfigurationContext.Provider>
  )
};

const useConfiguration = () => {
  const context = useContext(ConfigurationContext);
  if (context === undefined) {
    return {}
  }
  return context
};

export {
  ConfigurationContextProvider,
  ConfigurationContext,
  useConfiguration
};