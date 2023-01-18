const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtn = document.getElementById("modal-choice-btns")



setTimeout(function(){
    modal.style.display = "inline"
}, 1500)


closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

consentForm.addEventListener("submit", function(event){
    event.preventDefault()
    const newFormData = new FormData(consentForm)
    const name = newFormData.get("fullName")
    modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
    </div>`
    setTimeout(function(){
        document.getElementById("uploadText").innerText = `Making the sale...`
        
    }, 1500)

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks ${name}, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
        closeBtn.disabled = false
        
    }, 3000)


})

declineBtn.addEventListener("mouseenter", function(){
    modalChoiceBtn.classList.toggle("reverse")
})






   

