const toggleBtn = document.getElementById('toggle-btn');
const navBar = document.getElementById('nav-bar');

toggleBtn.addEventListener('click', () => {
    if (navBar.style.right === '-300px') {
        navBar.style.right = '0';
    } else {
        navBar.style.right = '-300px';
    }
});

document.addEventListener('click', (event) => {
    if (window.innerWidth <= 500 && !navBar.contains(event.target) && !toggleBtn.contains(event.target)) {
        navBar.style.right = '-300px';
    }
});

const navLinks = document.querySelectorAll('#nav-bar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 500) {
            navBar.style.right = '-300px';
        }
    });
});
const seeMore=document.getElementById("see-more");
const about=document.getElementById("about");


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
