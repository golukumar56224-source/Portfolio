const text = "Full Stack Developer | Problem Solver";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing, 50);
}
}
typing();

/* CONTACT FORM */
document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
alert("Message Sent Successfully!");
});

// ACHIVEMENTS /
document.querySelectorAll(".achievement-card a").forEach(link => {
link.addEventListener("click", function(e){
alert("Certificate is opening");
});
});

// ======== INTERNSHIP ===== //
