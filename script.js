const form = document.getElementById("form");
const description = document.getElementById("description");
const dropDown = document.getElementById("dropDown");
const amount = document.getElementById("amount");
const table = document.getElementById("table");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (description && dropDown && amount) {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${description.value}</td>
        <td>${dropDown.value}</td>
        <td>${amount.value}</td>`;
        table.append(newRow);
    }
    description.value = "";
    dropDown.value = "";
    amount.value = "";

})