const API = "php/api.php";

let data = [];

// READ
async function load() {

    const res = await fetch(API);

    data = await res.json();

    render();
}

// CREATE
async function create() {

    const nev = document.getElementById("nev").value;
    const megyeid = document.getElementById("megyeid").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: "create",
            nev: nev,
            megyeid: megyeid
        })
    });

    load();
}

// UPDATE
async function update(id) {

    const nev = prompt("Új név:");
    const megyeid = prompt("Új megye ID:");

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: "update",
            id,
            nev,
            megyeid
        })
    });

    load();
}

// DELETE
async function remove(id) {

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: "delete",
            id
        })
    });

    load();
}

// RENDER
function render() {

    const t = document.getElementById("table");

    t.innerHTML = "";

    data.forEach(x => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${x.id}</td>
            <td>${x.nev}</td>
            <td>${x.megyeid}</td>
            <td>
                <button onclick="update(${x.id})">Edit</button>
                <button onclick="remove(${x.id})">Delete</button>
            </td>
        `;

        t.appendChild(row);
    });
}

load();