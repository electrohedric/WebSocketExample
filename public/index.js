const socket = io();

function fetchWords() {
    let input = document.getElementById("word");
    if (input.value.length < 2) {
        let div = document.getElementById("words");
        div.innerHTML = "";
    }

    socket.emit("get-words", input.value);
}

socket.on("words", (arr) => {
    if (!Array.isArray(arr)) return; // not an array

    let div = document.getElementById("words");
    div.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let node = document.createTextNode(arr[i]);
        let para = document.createElement("p");
        para.appendChild(node);
        div.appendChild(para);
    }
});
