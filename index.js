function getTask(){
    let delButtons = document.getElementsByClassName("btn del");
    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener("click", function(event) {
            event.target.parentNode.parentNode.remove();
            console.log("Delete button clicked");
        });
    }
}
let addBut = document.getElementById('AddB');
addBut.addEventListener("click",() => {
    let inputValue = document.getElementById('taskInput').value;
    let tasks = document.querySelector("ul");
    tasks.innerHTML+=`<li class="unchecked">
    <div class="content">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="radio-button-unchecked"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
        <p class="hihi">${inputValue}</p>
    </div>
    <div class="actions">
        <button class="btn edit">edit</button>
        <button class="btn del">delete</button>
    </div>
</li>`
getTask();

})

getTask();
