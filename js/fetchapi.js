async function loadData() {
  const response = await fetch("php/api.php");
  const data = await response.json();

  const list = document.getElementById("fetchList");
  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.name;
    list.appendChild(li);
  });
}