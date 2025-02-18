function addItem() {
    let input = document.getElementById("itemInput");
    let list = document.getElementById("shoppingList");

    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.className = "list-item";

        li.innerHTML = `
        <div class="left-section">
            <input type="radio" name"item">
            <label>${input.value}</label>
        </div>
        <button class"delete-button" onclick="removeItem(this)">
            <img src="/images/trash.svg" alt="ícone de lixeira">
        </button>
        `;
        list.appendChild(li)
        input.value = "";
    }
}

function removeItem(button) {
    let listItem = button.parentElement;
    listItem.remove();

    let alertBox = document.getElementById("alertBox");
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}