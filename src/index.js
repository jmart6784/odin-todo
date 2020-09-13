import { compareAsc, format } from 'date-fns'

let projects = [];

// Factory function for Projects that contain a todo array
let Project = (name, todo) => {
  let getName = () => name;
  let getTodo = () => todo;
  let clearTodo = () => todo = [];

  let addTodo = (newTodo) => {
    todo.push(newTodo);
  };

  return {
    getName,
    getTodo,
    addTodo,
    clearTodo
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

// Generates updated html based on projects array
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

      // Add todo Title label
      let tdTitleInfo = document.createElement("h3");
      let tdTitleTxtInfo = document.createTextNode("Title");

      tdTitleInfo.className = "td-title-info";

      tdTitleInfo.appendChild(tdTitleTxtInfo);
      todoRowInfo.appendChild(tdTitleInfo);

      // Add todo Date label
      let tdDateInfo = document.createElement("h3");
      let tdDateTxtInfo = document.createTextNode("Date");

      tdDateInfo.className = "td-date-info";

      tdDateInfo.appendChild(tdDateTxtInfo);
      todoRowInfo.appendChild(tdDateInfo);

      // Add todo Priority label
      let tdPriorityInfo = document.createElement("h3");
      let tdPriorityTxtInfo = document.createTextNode("Priority");

      tdPriorityInfo.className = "td-priority-info";

      tdPriorityInfo.appendChild(tdPriorityTxtInfo);
      todoRowInfo.appendChild(tdPriorityInfo);

      // Add Show label
      let tdshowInfo = document.createElement("h3");
      let tdshowTxtInfo = document.createTextNode("Show");

      tdshowInfo.className = "td-priority-info";

      tdshowInfo.appendChild(tdshowTxtInfo);
      todoRowInfo.appendChild(tdshowInfo);

      // Add todo delete label
      let tdDelInfo = document.createElement("h3");
      let tdDelTxtInfo = document.createTextNode("Delete");

      tdDelInfo.className = "td-priority-info";

      tdDelInfo.appendChild(tdDelTxtInfo);
      todoRowInfo.appendChild(tdDelInfo);

      let todoID = 0;

      // For each todo in project generate html
      project.getTodo().forEach( todo => {
        todoID++;
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

        // Add Show description button
        let sdBtn = document.createElement("button");
        let sdBtnTxt = document.createTextNode("Show");

        sdBtn.className = "sd-btn";

        sdBtn.appendChild(sdBtnTxt);
        todoRow.appendChild(sdBtn);

        // Add delete todo button
        let deleteBtn = document.createElement("button");
        let deleteBtnTxt = document.createTextNode("Delete");

        deleteBtn.className = "delete-todo-btn";

        deleteBtn.appendChild(deleteBtnTxt);
        todoRow.appendChild(deleteBtn);

        // Add onClick() event to delete button
        deleteBtn.onclick = function() {
          let matches = [];

          project.getTodo().find( td => {
            if (td === todo) {
              null
            } else {
              matches.push(td);
            }
          });

          project.clearTodo();
          
          matches.forEach( match => {
            project.addTodo(match);
          });

          render();
        };

        // Add todo Description and create unique id for hiding and showing descriptions
        let tdDesc = document.createElement("h3");
        let tdDescTxt = document.createTextNode(todo.getDesc());

        let nameAry = [];
        let splitName = project.getName().split(" ");

        splitName.forEach(part => {
          let lcName = part.toLowerCase();
          nameAry.push(lcName);
        });
      
        let joinedName = nameAry.join("-");

        tdDesc.className = "td-desc";
        tdDesc.id = `description-${todoID}-${joinedName}`;

        tdDesc.appendChild(tdDescTxt);
        todoRow.appendChild(tdDesc);
        // Hide description by default
        tdDesc.style.display = "none";

        // Add onClick() event to show button
        sdBtn.onclick = function() {
          let desc = document.getElementById(`${tdDesc.id}`);

          if (desc.style.display === "none") {
            sdBtn.textContent = "Hide";
            desc.style.display = "block";
          } else if (desc.style.display === "block") {
            sdBtn.textContent = "Show";
            desc.style.display = "none";
          };
        };
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
      // Hide new todo form
      document.getElementById("new-td-hide").style.display = "none"

      newProjectForm.style.display = "block";
    });

    // Hide form when closed
    newProjectClose.addEventListener("click", function() {
      newProjectForm.style.display = "none";
    });

    newProjectSubmit.addEventListener("click", function() {
      if ((!newProjectInput.value.trim().length) || newProjectInput.value.length === 0) {
        flashMsg("error", "Project name cannot be empty");
        newProjectInput.value = "";
      } else if (!(newProjectInput.value.length <= 30)) {
        flashMsg("error", "Project name cannot be longer than 30 characters");
        newProjectInput.value = "";
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

let newTodo = (() => {
  let start = () => {
    let form = document.getElementById("new-td-hide");
    let newTdBtn = document.getElementById("new-todo-btn");
    let closeForm = document.getElementById("new-td-close");
    let submitBtn = document.getElementById("new-td-submit");
    let title = document.getElementById("td-title");
    let description = document.getElementById("td-description");
    let priority = document.getElementById("td-priority");
    let date = document.getElementById("date-input");
    let dropdown = document.getElementById("proj-select");

    // Create drop down options based on projects
    projects.forEach( project => {
      let newOption = document.createElement("option");
      let optionTxt = document.createTextNode(project.getName());
      
      newOption.appendChild(optionTxt);
      newOption.setAttribute("value", project.getName());
      dropdown.appendChild(newOption);
    });

    // Show new todo form when button is pressed
    newTdBtn.addEventListener("click", function() {
      // Hide New Project form
      document.getElementById("np-hide").style.display = "none"

      form.style.display = "block";
    });

    // Close todo form when button is pressed
    closeForm.addEventListener("click", function() {
      form.style.display = "none";
    });

    // Submit todo form
    submitBtn.addEventListener("click", function() {
      // Split date from input and make the results integers
      let splitDate = date.value.split("-");
      let month = parseInt(splitDate[1]);
      let day = parseInt(splitDate[2]);
      let year = parseInt(splitDate[0]);

      // Form validations with flash message
      if (
        !(title.value.length <= 20) || 
        !(description.value.length <= 100) || 
        !(parseInt(priority.value) >= 1) || 
        !(parseInt(priority.value) <= 10) || 
        !title.value.trim().length || 
        !description.value.trim().length || 
        !priority.value.trim().length || 
        !date.value.trim().length || 
        !dropdown.value.trim().length
      ) {
        title.value = "";
        description.value = "";
        priority.value = "";
        date.value = "";
        dropdown.value = "";
        flashMsg("error", "One or more fields are empty or over the character limit");
      } else {
        // Loop through projects to find a match from dropdown menu and add todo
        projects.forEach( project => {
          if (project.getName() === dropdown.value) {
            let newTodo =  Todo(title.value, description.value, format(new Date(year, month, day), 'MM-dd-yyyy'), parseInt(priority.value));
  
            project.addTodo(newTodo);
            title.value = "";
            description.value = "";
            priority.value = "";
            date.value = "";
            dropdown.value = "";
            render();
          };
        });
      };
    });
  };

  return {
    start
  }
})();

newTodo.start();