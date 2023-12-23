const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) =>{
     // e.pageX --> across
    // e.pageY --> up and down
   // console.log(event);
    moveCursor(e.pageX, e.pageY);
});

 moveCursor = (pageX, pageY) =>{
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
};

