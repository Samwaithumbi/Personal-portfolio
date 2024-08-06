const seeMore=document.getElementById("see-more");
const about=document.getElementById("about");

seeMore.addEventListener("click", ()=>{

})


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzxaCQeBDk86oX_7Z0ZinoFq8oVArjkIQ8NoJKqRfkUoxUFgRbxYwrGyV9qSdemgmjBzw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
