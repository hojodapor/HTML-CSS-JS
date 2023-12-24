const Emoji = document.querySelector(".emoji");

const emojis = ["😆","😅","🤣","😂","😀","🤑","🤨","🙂","😊","😗","😛","😏","🤥","😴","🥺",
                "😧","😇","😳","🙃", "🥴","🧐", "🤨","😒","🤔","🤭","🥰","🤐","😄", "🤔", "🤪",
                "🥲","😃","😁", "😬"];


Emoji.addEventListener("mouseover", () => {
    let randomNumber = Math.floor(Math.random() * emojis.length)
    Emoji.innerHTML = emojis[randomNumber];
})

