import { compareAsc, format } from 'date-fns'

let projects = [];

// Factory function for Projects that contain a todo array
let Project = (name, todo) => {
  let getName = () => name;
  let getTodo = () => todo;

  let addTodo = (newTodo) => {
    todo.push(newTodo);
  };

  return {
    getName,
    getTodo,
    addTodo
  }
};

let all = Project("All", []);
let schoolWork = Project("School Work", []);
let chores = Project("Chores", []);

projects.push(all, schoolWork, chores);

// Factory function for todo's
let Todo = (title, description, dueDate, priority) => {
  let getTitle = () => title;
  let getDesc = () => description;
  let getDate = () => dueDate;
  let getPriority = () => priority;

  return {
    getTitle,
    getDesc,
    getDate,
    getPriority
  }
};

let todo1 = Todo("Default Title1", "Default description1", format(new Date(2020, 9, 14), 'MM-dd-yyyy'), 8);

let todo2 = Todo("Default Title2", "Default description2", format(new Date(2020, 9, 15), 'MM-dd-yyyy'), 9);

let todo3 = Todo("Default Title3", "Default description3", format(new Date(2020, 9, 16), 'MM-dd-yyyy'), 10);

all.addTodo(todo1);
all.addTodo(todo2);
all.addTodo(todo3);

schoolWork.addTodo(todo1);
schoolWork.addTodo(todo2);


let render = () => {
  // Remove all previous renders so there are no accidental duplicates
  document.querySelectorAll(".proj-div").forEach( project => project.remove());

  let gridDiv = document.getElementById("todo-grid");

  projects.forEach( project => {
    // Create Div for every project
    let projDiv = document.createElement("div");
    projDiv.className = "proj-div";
    gridDiv.appendChild(projDiv);

    // Add name
    let pName = document.createElement("h2");
    let pNameTxt = document.createTextNode(project.getName());

    pName.className = "proj-name";

    pName.appendChild(pNameTxt);
    projDiv.appendChild(pName);

    // Add new todo button
    let pButton = document.createElement("button");
    let pButtonTxt = document.createTextNode("+Add todo");

    pButton.className = "proj-todo-btn";

    pButton.appendChild(pButtonTxt);
    projDiv.appendChild(pButton);

    // Create Div for every todo's
    let todoDiv = document.createElement("div");
    todoDiv.className = "todo-div";
    projDiv.appendChild(todoDiv);

    // Adds info bar and todo's only if the project contains any todo's
    if (project.getTodo().length > 0) {
      // Add info label div
      let todoRowInfo = document.createElement("div");
      todoRowInfo.className = "todo-row-info";
      todoDiv.appendChild(todoRowInfo);

      // Add todo Title
      let tdTitleInfo = document.createElement("h3");
      let tdTitleTxtInfo = document.createTextNode("Title");

      tdTitleInfo.className = "td-title-info";

      tdTitleInfo.appendChild(tdTitleTxtInfo);
      todoRowInfo.appendChild(tdTitleInfo);

      // Add todo Description
      let tdDescInfo = document.createElement("h3");
      let tdDescTxtInfo = document.createTextNode("Description");

      tdDescInfo.className = "td-desc-info";

      tdDescInfo.appendChild(tdDescTxtInfo);
      todoRowInfo.appendChild(tdDescInfo);

      // Add todo Date
      let tdDateInfo = document.createElement("h3");
      let tdDateTxtInfo = document.createTextNode("Date");

      tdDateInfo.className = "td-date-info";

      tdDateInfo.appendChild(tdDateTxtInfo);
      todoRowInfo.appendChild(tdDateInfo);

      // Add todo Priority
      let tdPriorityInfo = document.createElement("h3");
      let tdPriorityTxtInfo = document.createTextNode("Priority");

      tdPriorityInfo.className = "td-priority-info";

      tdPriorityInfo.appendChild(tdPriorityTxtInfo);
      todoRowInfo.appendChild(tdPriorityInfo);

      // For each todo in project generate html
      project.getTodo().forEach( todo => {
        // Create Div for every todo's
        let todoRow = document.createElement("div");
        todoRow.className = "todo-row";
        todoDiv.appendChild(todoRow);

        // Add todo Title
        let tdTitle = document.createElement("h3");
        let tdTitleTxt = document.createTextNode(todo.getTitle());

        tdTitle.className = "td-title";

        tdTitle.appendChild(tdTitleTxt);
        todoRow.appendChild(tdTitle);

        // Add todo Description
        let tdDesc = document.createElement("h3");
        let tdDescTxt = document.createTextNode(todo.getDesc());

        tdDesc.className = "td-desc";

        tdDesc.appendChild(tdDescTxt);
        todoRow.appendChild(tdDesc);

        // Add todo Date
        let tdDate = document.createElement("h3");
        let tdDateTxt = document.createTextNode(todo.getDate());

        tdDate.className = "td-date";

        tdDate.appendChild(tdDateTxt);
        todoRow.appendChild(tdDate);

        // Add todo Priority
        let tdPriority = document.createElement("h3");
        let tdPriorityTxt = document.createTextNode(todo.getPriority());

        tdPriority.className = "td-priority";

        tdPriority.appendChild(tdPriorityTxt);
        todoRow.appendChild(tdPriority);
      });
    };
  });
};

render();

let flashMsg = (type, message) => {
  let flashDiv = document.getElementById("flash");

  flashDiv.style.display = "block";
  flashDiv.textContent = message;

  if (type === "error") {
    flashDiv.style.backgroundColor = "rgb(128, 0, 0)";
  } else if (type === "success") {
    flashDiv.style.backgroundColor = "rgb(0, 156, 34)";
  };

  setTimeout(function() {
    flashDiv.style.display = "none";
  }, 4000);
};

let newProject = (() => {
  let start = () => {
    let newProjectBtn = document.getElementById("nav-btn");
    let newProjectForm = document.getElementById("np-hide");
    let newProjectClose = document.getElementById("np-close");
    let newProjectSubmit = document.getElementById("np-submit");
    let newProjectInput = document.getElementById("np-input");

    // Show form when new project is clicked
    newProjectBtn.addEventListener("click", function() {
      newProjectForm.style.display = "block";
    });

    // Hide form when closed
    newProjectClose.addEventListener("click", function() {
      newProjectForm.style.display = "none";
    });

    newProjectSubmit.addEventListener("click", function() {
      if ((!newProjectInput.value.trim().length) || newProjectInput.value.length === 0) {
        console.log("empty");
        flashMsg("error", "Project name cannot be empty");
      } else {
        let newProj = Project(newProjectInput.value, []);
        projects.push(newProj);
        flashMsg("success", `Project ${newProjectInput.value} was created`);
        newProjectInput.value = "";
        render();
      };
    });
  };

  return {
    start
  };
})();

newProject.start();