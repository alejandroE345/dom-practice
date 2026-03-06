console.log("Script Started");

    function changeColor() {
        console.log("click");
        let color = prompt("Enter a new color for the poem");
        let p = document.getElementById("poem");
        p.style.color = color;
        
    }

    function changeFontSize() {
        console.log("click");
        let size = prompt("Enter a new font size in pixels");
        p = document.getElementById("poem");
        p.style.fontSize = size;
    }

    function changePoem() {
        console.log("click");
        let title = prompt("Enter a new title for the poem");
        let text = prompt("Enter new text for the poem");
        let h1 = document.getElementById("title");
        p = document.getElementById("poem");
        h1.innerText = title;
        p.innerText = text;
        
    }