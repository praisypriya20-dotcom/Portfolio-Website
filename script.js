document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

document
.getElementById("success")
.innerHTML =
"Message Sent Successfully!";

});

const text = [
"Web Developer",
"Student",
"Frontend Designer"
];

let count = 0;

setInterval(() => {
document.getElementById("typing").innerHTML =
text[count];

count++;

if(count >= text.length){
count = 0;
}
},2000);

document
.getElementById("darkBtn")
.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

