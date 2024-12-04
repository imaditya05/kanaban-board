const input = document.getElementById("todo-input");
const btn = document.getElementById("create-toto-btn");
const toDoBoard = document.getElementById("todo-board");

btn.addEventListener("click", (e) => {
  const value = input.value;

  const div = document.createElement("div");
  const p = document.createElement("p");
  const txt = document.createTextNode(value);

  div.setAttribute("draggable", "true");
  div.classList.add("item");

  div.addEventListener("dragstart", (e) => {
    div.classList.add("dragging");
  });

  div.addEventListener("dragend", (e) => {
    div.classList.remove("dragging");
  });

  p.appendChild(txt);
  div.appendChild(p);
  toDoBoard.appendChild(div);

  input.value = "";
});
