
const input = document.querySelector(".container input");
const add = document.querySelector(".inputArea button");
const list = document.querySelector(".list");
const delet = document.querySelector(".footer button");



input.onkeyup = ()=>{
  let userEnteredValue = input.value; 
  if(userEnteredValue.trim() != 0){ 
    add.classList.add("active"); 
  }else{
    add.classList.remove("active"); 
  }
}

tasks(); 

add.onclick = ()=>{ 
  let userEnteredValue = input.value; 
  listArr.push(userEnteredValue); 
  localStorage.setItem("New Todo", JSON.stringify(listArr)); 
   tasks(); 
  add.classList.remove("active"); 
}

function tasks(){
  let getLocalStorageData = localStorage.getItem("New Todo"); 
  if(getLocalStorageData == null){
    listArr = [];
  }else{
    listArr = JSON.parse(getLocalStorageData); 
  }
  
  
  if(listArr.length > 0){ 
    delet.classList.add("active"); 
  }else{
    delet.classList.remove("active");
  }
  let newList = "";
  listArr.forEach((element, index) => {
    newList += `<li>${element}<span class="icon" onclick="deleteTask(${index})">Löschen</span></li>`;
  });
  list.innerHTML = newList; 
  input.value = ""; 
}


function deleteTask(index){
  listArr.splice(index, 1); 
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  tasks(); 
}


delet.onclick = ()=>{
  listArr = []; 
  localStorage.setItem("New Todo", JSON.stringify(listArr)); 
  tasks(); 
}

