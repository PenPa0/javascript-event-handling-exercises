let colorIndex = 0

function createStickyNote() {
    const container = document.getElementById("stickyNotesContainer")
    const newDiv = document.createElement("div")

    let noteText = document.getElementById("noteInput").value

    newDiv.innerHTML = noteText; // Set innerHTML instead of appending text node

    container.insertAdjacentElement("beforeend", newDiv) // Use insertAdjacentElement instead of insertAdjacentHTML
    
    document.getElementById("noteInput").value = ""

    function color(){
        let random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"]

        if (colorIndex > random_color.length -1) {
            colorIndex = 0;
        }
        return random_color[colorIndex++]
    }
    
    newDiv.style.background = color()
}
