let accordion = document.getElementsByClassName("question");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.maxHeight
      ? panel.style.maxHeight = null 
      : panel.style.maxHeight = panel.scrollHeight + "px";
  });
}