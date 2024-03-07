const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoListLi = document.querySelector("#todo-list li");
function addTask() {
  let listElement = `<li class="unchecked">
  <div class="d-flex align-items-center gap-3 child1">
      <div class="child2"></div>
      <div>${
        todoInput.value.charAt(0).toUpperCase() + todoInput.value.slice(1)
      }</div>
  </div>
  <button class="cancel-btn">x</button>
</li>`;
  if (todoInput.value !== "") {
    todoList.insertAdjacentHTML("beforeend", listElement);
    todoInput.value = "";
    todoInput.focus();
  } else {
    alert("Enter the Task");
  }
}
addBtn.addEventListener("click", addTask);

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel-btn")) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    e.target.classList.toggle("unchecked");
  }
});
