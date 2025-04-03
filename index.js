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


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzP2RAvq-gwKRa9a00utpkDGZC1MnzL11jWegKIghawzEKd99PwnCBQ89xRbeI0mKeJ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
