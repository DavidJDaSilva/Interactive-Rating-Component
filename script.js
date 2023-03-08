const buttons = document.querySelectorAll("button");

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove highlight from all buttons
        buttons.forEach(button => {
            button.style.backgroundColor = "";
        });
        // Highlight the click button
        button.style.backgroundColor = "#FB7413"
    });
});

// Add click event listener to button container
const buttonContainer = document.querySelector(".card");
buttonContainer.addEventListener("click", event => {
    // If the click event occurred on a button, do nothing
    if (event.target.classList.contains('button')) {
        return;
    }
    // Remove highlight from all buttons
    buttons.forEach(button => {
        button.style.backgroundColor = "";
    });
});
