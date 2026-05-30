import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const Header = () => {
  // Uso mi custom hook para traerme las funciones que cambian el estado global,
  // así mantengo mis props bien limpias y no saturo el componente.
  const { theme, toggleTheme, activeUser, users, changeUser } = useDashboard();

  return (
    <header className="header">
      <h2>Dashboard Interactivo</h2>
      <div className="header-controls">
        
        {/* Cumpliendo el requisito funcional: Cambio de usuario activo */}
        <select 
          value={activeUser.id} 
          onChange={(e) => changeUser(Number(e.target.value))}
        >
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        
        {/* Cumpliendo el requisito funcional: Tema claro/oscuro */}
        <button onClick={toggleTheme}>
          Tema: {theme === 'light' ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </div>
    </header>
  );
};

export default Header;