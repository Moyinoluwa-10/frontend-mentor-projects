// Toggling the drop-down menu

// Declaring Variables

const box = document.getElementsByClassName("box");

// Adding Functionality

for (let i = 0; i < box.length; i++) {

  box[i].addEventListener("click", function() {

    this.classList.toggle("active");
    
    let icon = this.lastElementChild
    
    icon.classList.toggle('change')
    
    let bottomText = this.nextElementSibling;
    
    if (bottomText.style.display === "block") {
      bottomText.style.display = "none";
    } else {
      bottomText.style.display = "block";
    }

  });

}
