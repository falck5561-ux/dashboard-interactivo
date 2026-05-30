import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

// Custom hook para consumir el contexto fácilmente y evitar prop drilling
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboard debe usarse dentro de DashboardProvider");
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  // Mi perfil principal y un par de usuarios extra para probar el selector del Header
  const users = [
    { id: 1, name: 'Josué Pérez Ponce', role: 'Software Engineer' },
    { id: 2, name: 'Usuario Tester', role: 'Evaluador' },
    { id: 3, name: 'Admin Pruebas', role: 'Administrador' }
  ];
  
  const [activeUser, setActiveUser] = useState(users[0]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changeUser = (userId) => {
    const user = users.find(u => u.id === userId);
    if (user) setActiveUser(user);
  };

  return (
    <DashboardContext.Provider value={{ theme, toggleTheme, activeUser, users, changeUser }}>
      {children}
    </DashboardContext.Provider>
  );
};