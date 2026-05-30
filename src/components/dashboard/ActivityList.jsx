import React, { useState, useMemo } from 'react';
import Card from './Card';

// Datos mock para probar el renderizado de la lista
const mockActivities = [
  { id: 1, text: 'Configuración inicial de Vite y React', type: 'desarrollo' },
  { id: 2, text: 'Revisión de requerimientos del proyecto', type: 'revision' },
  { id: 3, text: 'Creación de Custom Hook y Context API', type: 'desarrollo' },
  { id: 4, text: 'Planificación de la estructura de carpetas', type: 'gestion' },
];

const ActivityList = () => {
  const [filter, setFilter] = useState('todos');

  // useMemo para evitar recalcular el filtro innecesariamente en cada re-render
  const filteredActivities = useMemo(() => {
    if (filter === 'todos') return mockActivities;
    return mockActivities.filter(activity => activity.type === filter);
  }, [filter]);

  return (
    <Card title="Actividad Reciente">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="todos">Todos</option>
        <option value="desarrollo">Desarrollo</option>
        <option value="revision">Revisión</option>
        <option value="gestion">Gestión</option>
      </select>

      <ul className="activity-list">
        {filteredActivities.map(activity => (
          <li key={activity.id}>
            <span>{activity.text}</span>
            <span className="badge">{activity.type}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ActivityList;