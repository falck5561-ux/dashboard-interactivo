import React, { useState } from 'react';
import Card from './Card';

const StatsPanel = () => {
  // Aquí manejo el estado local para el contador interactivo que pide la rúbrica.
  const [counter, setCounter] = useState(0);

  return (
    <Card title="Interacciones (Contador)">
      <div className="stats-container">
        <h2>{counter}</h2>
        <div className="button-group">
          <button onClick={() => setCounter(c => c + 1)}>+ Incrementar</button>
          <button onClick={() => setCounter(0)}>Reiniciar</button>
        </div>
      </div>
    </Card>
  );
};

export default StatsPanel;