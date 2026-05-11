let users = [];

// TXT fájl beolvasása
async function loadData() {

    const response = await fetch("data/helyszin.txt");

    const text = await response.text();

    const lines = text.trim().split("\n");

    users = lines.map(line => {

        const [id, name, megyeid] = line.split("\t");

        return {
            id: Number(id),
            name: name,
            megyeid: megyeid
        };
    });

    renderTable();
}

// Táblázat megjelenítése
function renderTable() {

    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    users.forEach(user => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>

            <td>${user.name}</td>

            <td>${user.megyeid}</td>

            <td>

                <button onclick="updateItem(${user.id})">
                    Módosítás
                </button>

                <button onclick="deleteItem(${user.id})">
                    Törlés
                </button>

            </td>
        `;

        tableBody.appendChild(row);
    });
}

// CREATE
function createItem() {

    const id = document.getElementById("idInput");
    const name = document.getElementById("nameInput");
    const megye = document.getElementById("megyeIdInput");

    if (id.value.trim() === "") {
        return;
    }
    if (name.value.trim() === "") {
        return;
    }
    if (megye.value.trim() === "") {
        return;
    }


    const newUser = {

        id: id.value,

        name: name.value,

        megyeid: megye.value
    };

    users.push(newUser);

    id.value = "";
    name.value = "";
    megye.value = "";

    renderTable();
}

// UPDATE
function updateItem(id) {

    const newName = prompt("Új név:");

    if (!newName) {
        return;
    }

    users = users.map(user => {

        if (user.id === id) {

            return {
                ...user,
                name: newName
            };
        }

        return user;
    });

    renderTable();
}

// DELETE
function deleteItem(id) {

    users = users.filter(user => user.id !== id);

    renderTable();
}

// READ
loadData();