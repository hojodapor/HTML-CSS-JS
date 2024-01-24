//close
const close = document.getElementById("close");
//open
const open = document.getElementById("open");
//model
const model = document.getElementById("model");

open.addEventListener("click", () =>{
    model.classList.add("show-model");
})
close.addEventListener("click", ()=>{
    model.classList.remove("show-model");
})

window.addEventListener("click", (e)=>{
    e.target === model ? model.classList.remove("show-model"): false;
})
