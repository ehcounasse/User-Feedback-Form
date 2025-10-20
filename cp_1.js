const form = document.getElementById("feedbackform")
const feedbackDisplay= document.getElementById("feedbackdisplay")

form.addEventListener("input", (e) =>{
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        const field = e.target
        const charCount = field.parentElement.nextElementSibling
       charCount.textContent = `${field.value.length} Characters`;

    }
})

form.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        const tooltip = e.target.nextElementSibling
        tooltip.style.display = "block"
    }
})

form.addEventListener("mouseout", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        const tooltip = e.target.nextElementSibling
        tooltip.style.display = "none"
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();


const name = document.getElementById("username");
const email = document.getElementById("email");
const comment = document.getElementById("comments");

let valid = true

[name, email, comment].forEach((field) =>{
    errMSG = field.nextElementSibling.nextElementSibling;
    if (!field.value.trim()){
        errMSG.textContent = "This field is required"
        valid = false
    } else {
        errMSG.textContent= ""
}
});
if (!valid) return 

const entry = document.createElement("div")
entry.classList.add("feedbackentry")
entry.innerHTML = `<h3>${name.value}< /h3>
<p><strong>Email:<strong>${email.value}</ p>
<p>${comment.value}</p>`

feedbackDisplay.appendChild(entry)

form.reset();
});

document.body.addEventListener("click", (e)=> {
    console.log("Background clicked")
})

form.addEventListener("click", (e) => {
    e.stopPropagation();
})