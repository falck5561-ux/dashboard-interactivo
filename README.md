# Dashboard Interactivo Básico en React

Este proyecto es una aplicación de un Dashboard interactivo construido con React, aplicando buenas prácticas de desarrollo, composición de componentes y manejo de estado avanzado.

## 🚀 Funcionalidades
* **Gestión de Usuarios:** Permite alternar entre diferentes perfiles de usuario de forma dinámica.
* **Tema Claro/Oscuro:** Integración de un *switch* de temas respetando la jerarquía de componentes.
* **Lista Dinámica Filtrable:** Visualización de actividades recientes con un filtro por categorías.
* **Contador Interactivo:** Panel de estadísticas con estado local independiente.

## 🛠️ Arquitectura y Buenas Prácticas Aplicadas
* **Composición y Separación:** Todo el código está modularizado (Sidebar, Header, Card, paneles). Ningún componente supera las 150 líneas. No existe un `App.jsx` monolítico.
* **Cero JSX Duplicado:** Uso eficiente del componente contenedor `Card` y mapeo de arrays para listas.
* **Context API:** Uso de contextos para manejar el estado global, asegurando **0 niveles de *props drilling*** en lugar del límite máximo de 2.

## 🏆 Retos Extra Implementados
1.  **`useMemo`**: Implementado en `ActivityList.jsx` para evitar el recálculo innecesario de la lista de actividades al re-renderizar, optimizando el filtrado.
2.  **`React.memo`**: Implementado en el componente contenedor `Card.jsx` para prevenir renders innecesarios en elementos puramente visuales del layout.
3.  **`Custom Hook`**: Implementación de `useDashboard()` para consumir el Context API de manera limpia y semántica.