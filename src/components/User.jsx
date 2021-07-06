import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  
  // console.log(useParams())
  const {id} = useParams();
  const [pueblo, setPueblo] = React.useState([]);

  React.useEffect(() => {
      const obtenerDatos = async () => {
        const data = await fetch(
          `https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations/${id}`
        );
        const users = await data.json();
        console.log(users);
        setPueblo(users);
      };
    // console.log("useEffect");
    obtenerDatos()
  }, [id]);


  return (
    <div>
      <h3>{pueblo.name}</h3>
      <p>{pueblo.team_bonus}</p>
    </div>

  )
}

export default User;