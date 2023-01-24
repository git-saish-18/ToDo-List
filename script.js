let info = [];
const gettasklist = () => {
  let str = "";
  let str2 = "";
  if (localStorage.getItem("TaskList") == null) {
    info = [];
    localStorage.setItem("TaskList", JSON.stringify(task));
  } else {
    infostr = localStorage.getItem("TaskList");
    info = JSON.parse(infostr);
    localStorage.setItem("TaskList", JSON.stringify(info));
  }
  let item = document.getElementById("render");
  let btn = document.getElementById("btn");
  info.forEach((Element, index) => {
    str += `
    <div class="alltask">
     <p class="singletask">${Element}</p>
     <input type="button" id="del" value="🗑" onclick=(del(${index}))>
     <input type="button" id="remove" value="☑" onclick=(done(${index}))></input>
   </div>
    `;
  });
  item.innerHTML = str;
};

gettasklist();
const del = (index) => {
  let infobj;
  if (localStorage.getItem("TaskList") == null) {
    localStorage.setItem("TaskList", JSON.stringify(task));
  } else {
    infostr = localStorage.getItem("TaskList");
    infobj = JSON.parse(infostr);
    infobj.splice(index, 1);
  }
  localStorage.setItem("TaskList", JSON.stringify(infobj));
  gettasklist();
};
const done = (index) => {
  let text = document.getElementsByClassName("singletask")[index];
  text.style.textDecoration = "line-through";
};
const gettask = () => {
  let infobj;
  let task = document.getElementById("task").value;
  if (localStorage.getItem("TaskList") == null) {
    if (task != "") {
      info.push(task);
      localStorage.setItem("TaskList", JSON.stringify(task));
    } else {
      alert("Please Enter the Task ");
    }
  } else {
    if (task != "") {
      infostr = localStorage.getItem("TaskList");
      infobj = JSON.parse(infostr);
      info.push(task);
      localStorage.setItem("TaskList", JSON.stringify(info));
      gettasklist();
    } else {
      alert("Please Enter the Task ");
    }
  }
};

const RemoveAll = () => {
  if (confirm("You Really Want To Clear All Entries !!")) localStorage.clear();
  gettasklist();
};
