import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost/Web1Eloadas/php/api.php";

export default function Crud() {

    const [data, setData] = useState([]);
    const [nev, setNev] = useState("");
    const [megyeid, setMegyeid] = useState("");

    // READ
    const load = async () => {
        const res = await axios.get(API);
        console.log("BACKEND RESPONSE:", res.data);
        setData(Array.isArray(res.data) ? res.data : []);
    };

    useEffect(() => {
        load();
    }, []);

    // CREATE
    const create = async () => {
        await axios.post(API, {
            action: "create",
            nev,
            megyeid
        });

        setNev("");
        setMegyeid("");
        load();
    };

    // DELETE
    const remove = async (id) => {
        await axios.post(API, {
            action: "delete",
            id
        });

        load();
    };

    // UPDATE
    const update = async (item) => {

        const newName = prompt("Új név:", item.nev);
        const newMegye = prompt("Új megye ID:", item.megyeid);

        if (!newName || !newMegye) return;

        await axios.post(API, {
            action: "update",
            id: item.id,
            nev: newName,
            megyeid: newMegye
        });

        load();
    };

    return (
        <div>

            <h2>CRUD (Axios + PHP)</h2>

            <input
                placeholder="Név"
                value={nev}
                onChange={(e) => setNev(e.target.value)}
            />

            <input
                placeholder="Megye ID"
                value={megyeid}
                onChange={(e) => setMegyeid(e.target.value)}
            />

            <button onClick={create}>Létrehozás</button>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                        <th>Megye</th>
                        <th>Művelet</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nev}</td>
                            <td>{item.megyeid}</td>
                            <td>
                                <button onClick={() => update(item)}>Edit</button>
                                <button onClick={() => remove(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}