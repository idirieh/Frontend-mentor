const fullNmae = document.getElementById('full-name');
const userEmail = document.getElementById('email');
const userName = document.getElementById('user-name');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    console.log(fullNmae.value)
    console.log(userEmail.value)
    console.log(userName.value)
})
  