let projects;
let newTodoBtn = document.getElementById("new-todo-btn");

if (JSON.parse(localStorage.getItem("projects")) === null || JSON.parse(localStorage.getItem("projects")).length === 0) {
  localStorage.setItem("projects", JSON.stringify([]));
  projects = JSON.parse(localStorage.getItem("projects"));
  newTodoBtn.style.display = "none";
} else {
  projects = JSON.parse(localStorage.getItem("projects"));
  newTodoBtn.style.display = "block";
};

// Project object
function Project(name, todo) {
  this.name = name;
  this.todo = todo;
};

// Todo object
function Todo(title, description, dueDate, priority) {
  this.title = title;
  this.desc = description;
  this.date = dueDate;
  this.priority = priority;
};

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

// Generates updated html based on projects array
let render = () => {
  if (projects.length !== 0) {
    newTodoBtn.style.display = "block";

    // Hide message that says there aren't any projects
    document.getElementById("e-title").style.display = "none";

    // Remove all previous renders so there are no accidental duplicates
    document.querySelectorAll(".proj-div").forEach( project => project.remove());

    let gridDiv = document.getElementById("todo-grid");

    projects.forEach( project => {
      // Create Div for every project
      let projDiv = document.createElement("div");
      projDiv.className = "proj-div";
      gridDiv.appendChild(projDiv);

      // div for containing a 3 column grid
      let grid3Div = document.createElement("div");
      grid3Div.className = "grid3-div";
      projDiv.appendChild(grid3Div);

      // Empty div to fill free space on grid
      let emptyDiv = document.createElement("div");
      grid3Div.appendChild(emptyDiv);

      // Add name
      let pName = document.createElement("h2");
      let pNameTxt = document.createTextNode(project.name);

      pName.className = "proj-name";

      pName.appendChild(pNameTxt);
      grid3Div.appendChild(pName);

      // Add delete project button
      let projDelBtn = document.createElement("button");
      let projDelBtnTxt = document.createTextNode("Delete");

      projDelBtn.className = "delete-proj-btn";

      projDelBtn.appendChild(projDelBtnTxt);
      grid3Div.appendChild(projDelBtn);

      // Add onClick() event to delete button
      projDelBtn.onclick = function() {
        let confirmDelete = confirm("Are you sure you want to delete this project?");

        if (confirmDelete === true) {
          let nonMatches = [];

          projects.find( proj => {
            if (proj === project) {
              null
            } else {
              // Push all non-matches into array
              nonMatches.push(proj);
            }
          });
          
          // Delete all projects
          projects = [];
          
          // Push all non-matches into project array 
          nonMatches.forEach( nm => {
            projects.push(nm);
          });

          localStorage.setItem("projects", JSON.stringify(projects));
          flashMsg("success", `Project ${project.name} was deleted`);
          render();
        };
      };

      // Create Div for every todo's
      let todoDiv = document.createElement("div");
      todoDiv.className = "todo-div";
      projDiv.appendChild(todoDiv);

      // Adds info bar and todo's only if the project contains any todo's
      if (project.todo.length > 0) {
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
        project.todo.forEach( todo => {
          todoID++;
          // Create Div for every todo's
          let todoRow = document.createElement("div");
          todoRow.className = "todo-row";
          todoDiv.appendChild(todoRow);

          // Add todo Title
          let tdTitle = document.createElement("h3");
          let tdTitleTxt = document.createTextNode(todo.title);

          tdTitle.className = "td-title";

          tdTitle.appendChild(tdTitleTxt);
          todoRow.appendChild(tdTitle);

          // Add todo Date
          let tdDate = document.createElement("h3");
          let tdDateTxt = document.createTextNode(todo.date);

          tdDate.className = "td-date";

          tdDate.appendChild(tdDateTxt);
          todoRow.appendChild(tdDate);

          // Add todo Priority
          let tdPriority = document.createElement("h3");
          let tdPriorityTxt = document.createTextNode(todo.priority);

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
            let nonMatches = [];

            project.todo.find( td => {
              if (td === todo) {
                null
              } else {
                nonMatches.push(td);
              }
            });

            project.todo = [];
            
            nonMatches.forEach( match => {
              project.todo.push(match);
            });
            
            localStorage.setItem("projects", JSON.stringify(projects));
            render();
            flashMsg("success", `Todo ${todo.title} was deleted`);
          };

          // Add todo Description and create unique id for hiding and showing descriptions
          let tdDesc = document.createElement("h3");
          let tdDescTxt = document.createTextNode(todo.desc);

          let nameAry = [];
          let splitName = project.name.split(" ");

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
  } else {
    newTodoBtn.style.display = "none";
    // Remove all previous renders so there are no accidental duplicates
    document.querySelectorAll(".proj-div").forEach( project => project.remove());

    // Show message that there aren't any projects
    document.getElementById("e-title").style.display = "block";
  };
};

render();

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
        let newProj = new Project(newProjectInput.value, []);
        
        projects.push(newProj);
        localStorage.setItem("projects", JSON.stringify(projects));

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
      dropdown.options.length = 0;
      let newOption = document.createElement("option");
      let optionTxt = document.createTextNode(project.name);
      
      newOption.appendChild(optionTxt);
      newOption.setAttribute("value", project.name);
      dropdown.appendChild(newOption);
    });

    // Show new todo form when button is pressed
    newTdBtn.addEventListener("click", function() {
      // Hide New Project form
      document.getElementById("np-hide").style.display = "none"

      form.style.display = "block";

      // Load drop down again
      projects.forEach( project => {
        dropdown.options.length = 0;
        let newOption = document.createElement("option");
        let optionTxt = document.createTextNode(project.name);
        
        newOption.appendChild(optionTxt);
        newOption.setAttribute("value", project.name);
        dropdown.appendChild(newOption);
      });
    });

    // Close todo form when button is pressed
    closeForm.addEventListener("click", function() {
      form.style.display = "none";
    });

    // Submit todo form
    submitBtn.addEventListener("click", function() {
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
          if (project.name === dropdown.value) {
            let newTodo = new Todo(title.value, description.value, date.value, parseInt(priority.value));
  
            project.todo.push(newTodo);
            localStorage.setItem("projects", JSON.stringify(projects));

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