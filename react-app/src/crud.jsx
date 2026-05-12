import { useEffect, useState } from "react";

function crud() {

    // State-ek
    const [users, setUsers] = useState([]);

    const [id, setId] = useState("");

    const [name, setName] = useState("");

    const [megyeid, setMegyeid] = useState("");

    // TXT fájl beolvasása
    useEffect(() => {

        async function loadData() {

            const response = await fetch("/data/helyszin.txt");

            const text = await response.text();

            const lines = text.trim().split("\n");

            const data = lines.map(line => {

                const [id, name, megyeid] = line.split("\t");

                return {

                    id: Number(id),

                    name: name,

                    megyeid: megyeid
                };
            });

            setUsers(data);
        }

        loadData();

    }, []);

    // CREATE
    function createItem() {

        if (id.trim() === "") {
            return;
        }

        if (name.trim() === "") {
            return;
        }

        if (megyeid.trim() === "") {
            return;
        }

        const newUser = {

            id: Number(id),

            name: name,

            megyeid: megyeid
        };

        setUsers([...users, newUser]);

        setId("");

        setName("");

        setMegyeid("");
    }

    // UPDATE
    function updateItem(id) {

        const newName = prompt("Új név:");

        if (!newName) {
            return;
        }

        const updatedUsers = users.map(user => {

            if (user.id === id) {

                return {

                    ...user,

                    name: newName
                };
            }

            return user;
        });

        setUsers(updatedUsers);
    }

    // DELETE
    function deleteItem(id) {

        const filteredUsers = users.filter(user => user.id !== id);

        setUsers(filteredUsers);
    }

    return (

        <div>

            <h1>React CRUD</h1>

            <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <input
                type="text"
                placeholder="Név"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Megye ID"
                value={megyeid}
                onChange={(e) => setMegyeid(e.target.value)}
            />

            <button onClick={createItem}>
                Hozzáadás
            </button>

            <table border="1">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Név</th>

                        <th>Megye ID</th>

                        <th>Műveletek</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        users.map(user => (

                            <tr key={user.id}>

                                <td>{user.id}</td>

                                <td>{user.name}</td>

                                <td>{user.megyeid}</td>

                                <td>

                                    <button
                                        onClick={() => updateItem(user.id)}
                                    >
                                        Módosítás
                                    </button>

                                    <button
                                        onClick={() => deleteItem(user.id)}
                                    >
                                        Törlés
                                    </button>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default crud;