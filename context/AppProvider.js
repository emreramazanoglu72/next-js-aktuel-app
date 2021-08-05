import React, { createContext, useEffect, useState } from "react";
import { getDashboardData } from "../Service";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setDashboard(await getDashboardData());
  };
  const state = { dashboard, setDashboard };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
