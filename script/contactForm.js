const contactForm = document.querySelector('.contactForm')
const successMessage = document.querySelector('.contactForm_success')

contactForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let myForm = document.getElementById('contactForm');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
        .then(() => {
            console.log('Form successfully submitted')
            contactForm.style.display = 'none'
            successMessage.style.display = 'block'
        })
        .catch((error) => alert(error))
  }