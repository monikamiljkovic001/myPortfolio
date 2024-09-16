let toDoInp = document.querySelector(".toDoInput");
const btnAdd = document.querySelector("#buttonAdd");
const checkedList = document.querySelector(".checkedList");
const listBtn = document.querySelector("#myListBtn");
const xClose = document.querySelector("#closeX");

btnAdd.addEventListener("click", function () {
  if (toDoInp.value.length == "") {
    alert("Your field is empty");
  } else {
    let html = `<div class='tasks'>
    <ul id='item1'>
      <li>${toDoInp.value}</li>
    </ul>
    <button class='btnDelete'>Delete</button>
    <button class='btnCheck'></button></div>`;
    document.querySelector(".toDoList").innerHTML += html;
    toDoInp.value = "";

    let currentTask = document.querySelectorAll(".btnDelete");
    currentTask.forEach((task) =>
      task.addEventListener("click", function () {
        this.parentNode.remove();
      })
    );

    let currentTaskCheck = document.querySelectorAll(".btnCheck");
    currentTaskCheck.forEach((checked) =>
      checked.addEventListener("click", function () {
        checked.style.backgroundColor = "rgb(81, 255, 0)";
        checked.style.border = "0.5px solid";
        checked.style.boxShadow = "1px 1px 15px rgb(81, 255, 0)";
        setTimeout(() => {
          checkedList.appendChild(this.parentNode);
          checked.remove();
        }, 1500);
      })
    );
  }
});

const openList = function () {
  checkedList.classList.remove("hidden");
};
const closeList = function () {
  checkedList.classList.add("hidden");
};

listBtn.addEventListener("click", openList);
xClose.addEventListener("click", closeList);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeList();
  }
});
