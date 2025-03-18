const fullNmae = document.getElementById('full-name');
const userEmail = document.getElementById('email');
const userName = document.getElementById('user-name');
const submitBtn = document.getElementById('submit-btn');
const containers = document.querySelectorAll('.container')
// Ticket Side
const showUserFullName = document.getElementById('user_fullname');
const showUserEmail = document.getElementById('user-email');
const showName = document.querySelector('.person-name')
const showUserId = document.querySelector('.person-username')


submitBtn.addEventListener('click', () => {
    if (containers.length >= 2) {
        containers[0].classList.toggle("hidden"); // Hide first container
        containers[1].classList.toggle("hidden"); // Show second container
    }
    showUserFullName.innerText = fullNmae.value;
    showUserEmail.innerText = userEmail.value;
    showName.innerText = fullNmae.value;
    showUserId.innerText = userName.value;

    fullNmae.value = " "
    userEmail.value = " "
    userName.value = " "

})
  

