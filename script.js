console.log("start")
const input = document.getElementById('txtfield');
const addbtn = document.getElementById("btn") 
const ul = document.getElementById("listul") 

// Delete button 
// const remove = document.createElement("button");
// remove.textContent = "Delete";
// remove.style.cursor = "pointer";
// remove.style.marginLeft = "50px";
// remove.style.background = "blue";
// remove.style.color = "white";
// remove.style.borderRadius = "10px";
// remove.style.padding = "3px";
// remove.id = "dynamicButton";
// remove.className = "btnClass";


addbtn.addEventListener("click",show);

function show(){
    // console.log("hello")
    const data = input.value;
    if (!data.trim()) return; // Prevent empty items
    const li = document.createElement("li");

    const remove = document.createElement("button");
remove.textContent = "Delete";
remove.style.cursor = "pointer";
remove.style.marginLeft = "50px";
remove.style.background = "blue";
remove.style.color = "white";
remove.style.borderRadius = "10px";
remove.style.border = "none";
remove.style.padding = "4px";
remove.id = "dynamicButton";
remove.className = "btnClass";
    li.textContent = data;
    li.appendChild(remove);
    li.style.fontSize = '30px'
    li.style.margin = "20px"
    li.style.marginLeft = "40px"
    ul.appendChild(li)
    input.value = "";   // Clear Input Field
console.log(data);
remove.addEventListener("click",del);
function del(){
    li.remove();
}

li.addEventListener('click',line);
function line(){
    li.style.textDecoration = 'line-through';
}
}



