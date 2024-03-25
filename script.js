const item = document.querySelector("#item");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click",() => {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(item.value));
    list.appendChild(listItem);
    item.value = "";

    const listButton = document.createElement("button");
    listButton.textContent = "Remove";
    listItem.appendChild(listButton);

    listButton.addEventListener("click", () => {
        list.removeChild(listItem);
    });
});
