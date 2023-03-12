document.getElementById("createList").addEventListener('click', createList);

document.getElementById("close").addEventListener('click', removeListForm);

document.getElementById("addList").addEventListener('click', createCard);

let cards = [];
let opacity = document.querySelector(".opacity");
//to blur the screen

function createList() {
    console.log("List created");
    
    opacity.style.display = "block";
    let maincontainer_height = document.getElementById("maincontainer");
    opacity.style.height = `${maincontainer_height.offsetHeight + 100}px`;

    document.getElementsByClassName("listForm")[0].style.display = "flex";
    //when plus sign is clicked-  listForm  gets visible (initially it was hidden.)
}

function removeListForm() {
    console.log("List closed");
    document.getElementsByClassName("listForm")[0].style.display = "none";
    opacity.style.display = "none";
    //when close sign is clicked -listForm gets hidden.
}

function createCard() {
    //to create card
    console.log("Create card");
    
    document.getElementsByClassName("listForm")[0].style.display = "none";

    opacity.style.display = "none";

    document.getElementById('noitems').style.display = 'none';

    let title = document.createElement("p");
    title.className = "task_title";
    title.innerText = document.getElementById("listName").value;

    let hr = document.createElement("hr");
    hr.className = "line";

    let items = document.createElement("div");
    items.className = "items";

    let plus_icon = document.createElement("i");
    plus_icon.className = "fa-solid fa-plus plus_icon";
    plus_icon.style.cursor="pointer";
    plus_icon.style.color="black";
    



    plus_icon.addEventListener("click", function showt(){
        showtasks(items)
    }); 
    
    title.addEventListener("click", function () {

        let header = document.getElementsByTagName("header")[0];
        header.firstElementChild.style.display = "none";

        document.querySelector(".backbutton").style.display = "flex";
        document.querySelector(".tasklist").innerHTML = this.innerText;
        let listsss = document.querySelector("#lists");
        listsss.setAttribute("style", "justify-content:center;");

        let tempArray = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] === list)
                tempArray.push(cards[i]);
        }
        display(tempArray);
    });

    let del_icon = document.createElement("i");
    del_icon.className = "fa fa-trash del_icon";
    del_icon.style.cursor="pointer";
    del_icon.style.color="black";


    let icons = document.createElement("div");
    icons.className = "icons";
    icons.append(del_icon, plus_icon);

    let list = document.createElement("div");
    list.className = "child";
    list.append(title, hr, items, icons);

    del_icon.addEventListener("click", removeElement) ;
    function removeElement(){
        console.log("list is removed")
        let tempNewArray = [];
        for (let i=0;i<cards.length;i++) {
            if (cards[i] !== list){
                tempNewArray.push(cards[i]);
            }
        }
        cards = tempNewArray;
        display(cards);

        if(cards.length==0){
            document.getElementById('noitems').style.display = 'block';
       }
    }


    cards.push(list);
    display(cards);

}
    function display(n) {
        let lists = document.getElementById("lists");
        lists.innerHTML = "";
        for (let i = 0; i < n.length; i++) {
            lists.appendChild(n[i]);
        }
    }


function showtasks(box) {

    opacity.style.display = "block";

    let maincontainer_height = document.getElementById("maincontainer");

    opacity.style.height = `${maincontainer_height.offsetHeight + 100}px`;

    document.getElementsByClassName("itemForm")[0].style.display = "flex";
   
    document.getElementById("addTask").addEventListener('click', AddTasks);

    function AddTasks() {
        document.getElementsByClassName("itemForm")[0].style.display = "none";
        opacity.style.display = "none";
        console.log("addtasks");

        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");

        let label = document.createElement("label");
        label.innerText = document.getElementById("itemName").value;

        let task_box = document.createElement("div");
        task_box.className = "taskBox";
        task_box.append(input, label);

        box+=box.appendChild(task_box);

        document.querySelector(".plus_icon").removeEventListener("click", showt);

    }
    
    document.getElementById("closeTask").addEventListener('click', closeTasks);

    function closeTasks() {
        document.querySelector(".itemForm").style.visibility="hidden";
        opacity.style.display = "none";
        console.log("close button is pressed");
        document.querySelector(".plus_icon").removeEventListener("click", showt);
    }
}

document.querySelector(".backbutton").addEventListener("click", goback) 
    function goback(){
    console.log("Back button is pressed");
    let header = document.getElementsByTagName("header")[0];
    header.firstElementChild.style.display = "flex";

    document.querySelector(".backbutton").style.display = "none";
    document.querySelector(".tasklist").innerHTML = `Task <span class="list">List`;
    let listsss = document.querySelector("#lists");
    listsss.setAttribute("style", "justify-content:space-between;");

    display(cards);
}

