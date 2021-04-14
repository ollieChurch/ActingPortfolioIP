const contactForm = document.querySelector('.footer_contactForm')

contactForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let myForm = document.querySelector('.footer_contactForm');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }