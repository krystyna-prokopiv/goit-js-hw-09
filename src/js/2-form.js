const formData = {
    email: "",
    message: "",
}

// feedback-form-state

const form = document.querySelector(".feedback-form")
const input = form.querySelector("input")
const textarea = form.querySelector("textarea")


form.addEventListener("input", handleInput)
form.addEventListener("submit", handleSubmit)

populateText()

function handleInput(e) {
    console.log(e);
    
   formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}


function populateText() {
    const text = JSON.parse(localStorage.getItem("feedback-form-state"))
    
    if (text) {
        input.value = text.email
        textarea.value = text.message
        formData.email = text.email
        formData.message = text.message
    }
}


function handleSubmit(ev) {
    ev.preventDefault()
    const text = ev.target.elements
    const inputText = text.email.value.trim()
    const textareaText = text.message.value.trim()
    console.log(textareaText);
    if (!inputText || !textareaText) { 
        alert("Fill please all fields")
        return
    }
    
    
    console.log(formData);

    formData.email = ""
    formData.message = ""
    localStorage.removeItem("feedback-form-state")
    ev.currentTarget.reset()
}