const form = document.getElementById("feedbackform")
const feedbackDisplay= document.getElementById("feedbackdisplay")

form.addEventListener("input", (e) =>{
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        const field = e.target
        const errMSG = field.nextElementSibling.nextElementSibling;
        errMSG.textContent = `${field.value.length} Characters`;

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