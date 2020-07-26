var list = document.getElementById("list");
document.getElementById("deleteAllButton").disabled = true;
document.getElementById("deleteAllButton").style.opacity = "0.5";
document.getElementById("deleteAllButton").style.cursor = "default";

var count = 1;

var table = document.getElementById("table");


var todoText = document.getElementById("inputTodo");

var row;
var col0;
var col1;
var col2;


function addTodo(){
    
    document.getElementById("deleteAllButton").disabled = false;
    document.getElementById("deleteAllButton").style.opacity = "1";
    document.getElementById("deleteAllButton").style.cursor = "pointer";
    document.getElementById("deleteAllButton").style.display = "inline-block";


    row = document.createElement("tr");
    row.style.height = "30px";
    col0 = document.createElement("td");
    col0.setAttribute("class","column0");
    col1 = document.createElement("td");
    col1.setAttribute("class","column1");
    col2 = document.createElement("td");
    col2.setAttribute("class","column2");
    // col0.style.border = "1px solid black";
    // col1.style.border = "1px solid black";
    // col2.style.border = "1px solid black";



    // var delButton = document.createElement("img","Icons\del icon1.png");
    // // delButton.setAttribute('src','Icons\del icon1.png');
    // delButton.style.width = "50px";
    // delButton.style.height = "50px";
    // delButton.style.color = "black";
    
    // var delButton = document.createElement("a").innerHTML = '<i style="width: 50px; height: 50px; color: black;" class="fas fa-trash-alt"></i>';    
    // delButton.setAttribute("onclick","deleteItem(this)")
    // delButton.style.width = "50px";
    // delButton.style.height = "50px";
    // delButton.style.color = "black";

    var delButton = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delButton.setAttribute("class","listButton");
    delButton.setAttribute("onclick","deleteItem(this)");
    delButton.appendChild(delText);

    var editButton = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editButton.setAttribute("class","listButton");
    editButton.setAttribute("onclick","editItem(this)")
    editButton.appendChild(editText);



    
    if(todoText.value === ""){
        alert("Enter something !")
    }
    else{
        col0.innerHTML = count++ + ") ";
        col1.innerHTML = todoText.value;
        // count++;
        col2.appendChild(editButton);
        col2.appendChild(delButton);
        row.appendChild(col0);
        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
    }


    
    todoText.value = "";
    
}

function deleteItem(e){
    e.parentNode.parentNode.remove();
    
}


function editItem(){
    var val = col1.innerHTML;
    var editValue = prompt("Enter updated value", val);
    col1.innerHTML = editValue;
}

function deleteAll(){
    table.innerHTML = "";
    count = 1;
}


