import React from 'react';

// Aplico React.memo (uno de los retos extra de la actividad) para evitar 
// que este contenedor se vuelva a renderizar a lo loco si su título o contenido no cambian.
const Card = React.memo(({ title, children }) => {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
});

export default Card;