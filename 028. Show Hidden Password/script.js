//input
const input = document.querySelector('input');
//eye
const eye = document.querySelector('#eye-icon');

eye.addEventListener("click", () =>{
    if(input.type === "password") {
        input.type="text";
        eye.classList.add("fa-eye-slash");
        eye.classList.remove("fa-eye");
    } else {
        input.type= "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
})

// eye.addEventListener("click", () =>{
//     input.type === "password" ? (input.type = "text") : (input.type = "password");
// })