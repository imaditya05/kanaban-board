const boards = document.querySelectorAll(".board");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", (e) => {
    item.classList.remove("dragging");
  });
});

boards.forEach((board) => {
    board.addEventListener("dragover", ()  => {
        const taskEl = document.querySelector(".dragging");
        board.appendChild(taskEl);
    })
})
