import React from "react";

const Nosotros = () => {
  const datos = [
    { id: 1, nombre: "Reactjs" },
    { id: 2, nombre: "Vuejs" },
    { id: 3, nombre: "Angularjs" }
  ];

  // useState q simplemente tiene los datos
  const [equipo, setEquipo] = React.useState(null)

  React.useEffect(() => {
    console.log("useEffect");
    // Incorporar la información dentro del estado
    setEquipo(datos);
  }, []);

  return (
    <div>
      <h1>Nosotros</h1>
    </div>
  );
};

export default Nosotros;
