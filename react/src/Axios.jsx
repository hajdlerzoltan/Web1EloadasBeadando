import { useEffect, useState } from "react";
import axios from "axios";

function AxiosCrud() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/Web1Eloadas/php/api.php")
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Axios CRUD</h2>

      <ul>
        {
          data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default AxiosCrud;