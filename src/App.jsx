import React from 'react';
import { DashboardProvider, useDashboard } from './context/DashboardContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import UserPanel from './components/dashboard/UserPanel';
import StatsPanel from './components/dashboard/StatsPanel';
import ActivityList from './components/dashboard/ActivityList';

// Separó el layout en este componente para poder usar el hook del contexto 
// y aplicar la clase del tema (light/dark) en el contenedor principal.
const DashboardLayout = () => {
  const { theme } = useDashboard();
  
  return (
    <div className={`app-container ${theme}`}>
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard-grid">
          <UserPanel />
          <StatsPanel />
          <ActivityList />
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <DashboardProvider>
      <DashboardLayout />
    </DashboardProvider>
  );
}

export default App;