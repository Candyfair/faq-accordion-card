let question = document.getElementsByClassName("question");
let i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.maxHeight
      ? panel.style.maxHeight = null 
      : panel.style.maxHeight = panel.scrollHeight + "px";
  });
}



// let acc = document.getElementsByClassName("question");

// for (let i = 0; i < acc.length; i++) {
//   acc[i].onclick = function() {
//   	for (let i = 0; i < acc.length; i++) {
//         acc[i].classList.remove('active');
//         acc[i].style.maxHeight = null;
//         acc[i].nextElementSibling.style.maxHeight = null;
//     }
//     this.style.maxHeight = this.scrollHeight+'px';
//     this.classList.add('active');
//     const panel = this.nextElementSibling;
//     panel.style.maxHeight = panel.scrollHeight + 'px'
    
//   }
// }