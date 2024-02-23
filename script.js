const textInput = document.getElementById("text-input");
const output = document.querySelector(".output");

function add_task(){
    if (textInput.value == '') {
        alert("Enter Your Work Buddy..");
    } else{
        let li = document.createElement("li");
        li.innerHTML = textInput.value ;

        output.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        
        li.appendChild(span);
        
        textInput.value = '' ;
        savedata();
    }
}

output.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata();
    } else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}) ;


textInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        add_task();
    }
});

function savedata(){
    localStorage.setItem("data" , output.innerHTML);
}

function showdata(){
    output.innerHTML = localStorage.getItem("data");
}

showdata();