const taskAddButton = document.querySelector(".taskAddButton");
const toggleListButton = document.querySelector("#toggleListButton");
const taskInputField = document.querySelector("#taskInputField");
const taskContainer = document.querySelector(".taskContainer");
const taskWrapper = document.querySelector(".taskWrapper");
const toggleVisibilityButton = document.querySelector(".toggleVisibilityButton");
const successNotification = document.querySelector(".successNotification");
const errorNotification = document.querySelector(".errorNotification");

const maxVisibleCount = 5;
let currentVisibleCount = maxVisibleCount;


taskAddButton.addEventListener("click", function () {
  if (taskInputField.value === "") {
    showNotification(errorNotification, 2000);
    console.log(errorNotification.textContent);
  } 
    else {
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskCard");
    taskWrapper.insertBefore(taskElement, toggleVisibilityButton);

    const taskTextElement = document.createElement("p");
    taskTextElement.textContent = taskInputField.value.trim();
    taskElement.appendChild(taskTextElement);

    showNotification(successNotification, 2000);
    changeStyleTemporary(toggleListButton, "color", "var(--success)", 1000);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = "REMOVE";
    taskElement.appendChild(deleteTaskButton);

    deleteTaskButton.addEventListener("click", function () {
      this.parentElement.remove();
    });

    taskInputField.value = "";
  }

  refreshTaskVisibility();
});


function showNotification(notificationElement, duration) {
  notificationElement.classList.add("visible");
  setTimeout(() => {
    notificationElement.classList.remove("visible");
  }, duration);
}


function changeStyleTemporary(element, styleProperty, value, duration) {
  const originalValue = window.getComputedStyle(element)[styleProperty];
  element.style[styleProperty] = value;
  setTimeout(() => {
    element.style[styleProperty] = originalValue;
  }, duration);
}


toggleListButton.addEventListener("click", function () {
  taskContainer.classList.toggle("visible");
  if (taskContainer.classList.contains("visible")) {
    toggleListButton.textContent = "close";
    toggleListButton.style.color = "var(--darkText)";
  } else {
    toggleListButton.textContent = "my list";
    toggleListButton.style.color = "var(--main)";
  }
});


toggleVisibilityButton.addEventListener("click", function () {
  const taskElements = document.querySelectorAll(".taskCard");

  if (toggleVisibilityButton.textContent === "SHOW MORE") {
    currentVisibleCount += maxVisibleCount;

    taskElements.forEach((task, index) => {
      if (index < currentVisibleCount) {
        task.classList.remove("hidden");
      }
    });

    if (currentVisibleCount >= taskElements.length) {
      toggleVisibilityButton.textContent = "SHOW LESS";
    }
  } else {
    currentVisibleCount = maxVisibleCount;
    taskElements.forEach((task, index) => {
      if (index >= currentVisibleCount) {
        task.classList.add("hidden");
      }
    });
    toggleVisibilityButton.textContent = "SHOW MORE";
  }
});


function refreshTaskVisibility() {
  const taskElements = document.querySelectorAll(".taskCard");
  currentVisibleCount = maxVisibleCount;

  taskElements.forEach((task, index) => {
    if (index < maxVisibleCount) {
      task.classList.remove("hidden");
    } else {
      task.classList.add("hidden");
    }
  });

  if (taskElements.length > maxVisibleCount) {
    toggleVisibilityButton.style.display = "block";
  } else {
    toggleVisibilityButton.style.display = "none";
  }

  toggleVisibilityButton.textContent = "SHOW MORE";
}


refreshTaskVisibility();
