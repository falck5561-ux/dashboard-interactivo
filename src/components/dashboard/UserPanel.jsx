import React from 'react';
import Card from './Card';
import { useDashboard } from '../../context/DashboardContext';

const UserPanel = () => {
  // Me traigo la info del usuario activo usando mi custom hook. 
  // Con esto me salto el props drilling y mantengo la separación de componentes limpia.
  const { activeUser } = useDashboard();

  return (
    <Card title="Perfil Activo">
      <div className="user-profile">
        <div className="avatar">👤</div>
        <div>
          <h4>{activeUser.name}</h4>
          <p>{activeUser.role}</p>
        </div>
      </div>
    </Card>
  );
};

export default UserPanel;