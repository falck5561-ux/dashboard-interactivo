import React from 'react';

const Sidebar = () => {
  // Mantengo este componente de navegación súper sencillo y separado 
  // para respetar la regla de no tener todo en App.jsx 
  // y asegurarme de que mis archivos nunca pasen de las 150 líneas.
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>📊 Resumen</li>
          <li>👥 Usuarios</li>
          <li>⚙️ Configuración</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;