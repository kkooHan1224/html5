// 문서 객체를 가져옵니다.
const input = document.querySelector("#todo");
const todoList = document.querySelector("#todo-list");
const addButton = document.querySelector("#add-button");

let todoData = JSON.parse(localStorage.getItem('todo') || '[]');
// let keyCount = Math.max(-1, ...todoData.map((todo) => todo.key)) + 1;
let keyCount = todoData.reduce((acc, cur) => acc > cur.key ? acc : cur.key, -1) +1;

// 함수를 선언합니다.
const addTodo = () => {
  // 입력 양식에 내용이 없으면 추가하지 않습니다.
  if (input.value.trim() === "") {
    alert("할 일을 입력해주세요.");
    return;
  }

  const item = createTodo(keyCount++, input.value);
  todoList.appendChild(item);

  // 입력 양식의 내용을 비웁니다.
  input.value = "";
};

const render = () => {
    todoList.innerHTML = '';
    todoData.forEach((todo => {
        const item = createTodo(todo.key, todo.value);
        todoList.appendChild(item);
    }))
}

const createTodo = (key, value) => {
  // 문서 객체를 설정합니다.
  const item = document.createElement("div");

  item.innerHTML = `
    <input type = "checkbox" />
    <span>${value}</span>
    <i class="fa-solid fa-trash"></i>`;

  const checkbox = document.createElement("input");
  const button = document.createElement("i");

  // item 객체를 조작하고 추가합니다.
  item.setAttribute("data-key", key);

  // checkbox 객체를 조작합니다.
  checkbox.addEventListener("change", toggleTodo);

  // button 객체를 조작합니다.
  // button.textContent = '제거하기';
  // <i class="fa-solid fa-trash"></i>
  button.setAttribute("class", "fa-solid fa-trash");
  button.addEventListener("click", () => {
    removeTodo(key);
  });
  return item;
};

const removeTodo = (key) => {
  // 식별 키로 문서 객체를 제거합니다.
  const item = document.querySelector(`[data-key="${key}"]`);
  todoList.removeChild(item);

  todoData = todoData.filter((todo) => todo.key !== key);
};

const saveTodo = () => {
    const data = JSON.stringify(todoData);
    localStorage.setItem('todo', data);
};

const toggleTodo = function () {
  const { checked, parentNode } = this;
  parentNode.style.textDecoration = checked ? "line-through" : "";
};

// 이벤트 연결
addButton.addEventListener("click", addTodo);
input.addEventListener("keyup", (event) => {
  // 입력 양식에서 Enter 키를 누르면 바로 addTodo() 함수를 호출합니다.
  const ENTER = 13;
  if (event.keyCode === ENTER) {
    addTodo();
  }
});

render();