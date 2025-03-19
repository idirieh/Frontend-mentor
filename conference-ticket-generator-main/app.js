// Todo list: 1- Error handleing in UI


const fullNmae = document.getElementById('full-name');
const userEmail = document.getElementById('email');
const userName = document.getElementById('user-name');
const submitBtn = document.getElementById('submit-btn');
const containers = document.querySelectorAll('.container');
const dropArea = document.querySelector('.upload_area');
const dragText = document.getElementById('drag-text');
const uploadBtn = document.getElementById('file-upload');
const emailGroup = document.querySelector('.email_group')
// Ticket Side
const showUserFullName = document.getElementById('user_fullname');
const showUserEmail = document.getElementById('user-email');
const showName = document.querySelector('.person-name');
const showUserId = document.querySelector('.person-username');
const imgAvatar = document.getElementById('img-avatar')


submitBtn.addEventListener('click', () => {
    // if (containers.length >= 2) {

    // }

    showUserFullName.innerText = fullNmae.value;
    showUserEmail.innerText = userEmail.value;
    showName.innerText = fullNmae.value;
    showUserId.innerText = userName.value || "No UserName";

    if(!userEmail.value.includes('@')){
        let newDiv = document.createElement('div');
        // let text = document.createTextNode('Email is not Coreect!');
        newDiv.classList.add('upload_info')
        // newDiv.appendChild(text)
        newDiv.innerHTML = `
        <img style="color: red" src="./assets/images/icon-info.svg" alt=""><p class="upload_note" style="color: hsl(7, 71%, 60%)">Please enter a vaild email address.</p>
        `
        emailGroup.append(newDiv)
        userEmail.style.outline = "red"
    }else {
        containers[0].classList.toggle("hidden"); // Hide first container
        containers[1].classList.toggle("hidden"); // Show second container
    }

    fullNmae.value = " "
    userEmail.value = " "
    userName.value = " "

    const parser = new DOMParser();
    const doc = parser.parseFromString(imgTag, 'text/html');
    const imageElement = doc.body.firstChild;
    
    imgAvatar.src = imageElement.src

})

dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile(); //calling function
});
  
function showFile(){
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if(validExtensions.includes(fileType)){ //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = ()=>{
        let fileURL = fileReader.result; //passing user file source in fileURL variable
        window.imgTag = `<img src="${fileURL}" alt="" style="height: 150px; width: 150px">`; //creating an img tag and passing user selected file source inside src attribute
        dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
        }
        fileReader.readAsDataURL(file);
    }else{
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}

uploadBtn.addEventListener("change", function(){
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //calling function
});

  



// document.getElementById("emailForm").addEventListener("submit", function(event) {
//     const email = document.getElementById("email").value.trim();
//     const emailError = document.getElementById("emailError");
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//       emailError.style.display = "inline";
//       event.preventDefault(); // Prevent form submission
//     } else {
//       emailError.style.display = "none";
//     }
//   });


function validateForm() {
    // File Upload Validation
    const fileInput = document.getElementById("file-upload");
    const fileError = document.getElementById("fileError");
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 500 * 1024; // 500KB in bytes
  
    if (fileInput.files.length === 0) {
      fileError.textContent = "Please upload a file.";
      fileError.style.display = "inline";
      return;
    }
  
    const file = fileInput.files[0];
    if (!allowedTypes.includes(file.type)) {
      fileError.textContent = "Only JPG and PNG files are allowed.";
      fileError.style.display = "inline";
      return;
    }
  
    if (file.size > maxSize) {
      fileError.textContent = "File size must be less than 500KB.";
      fileError.style.display = "inline";
      return;
    }
  
    fileError.style.display = "none";
  
    // Full Name Validation
    const fullName = document.getElementById("full-name").value.trim();
    const nameError = document.getElementById("nameError");
  
    if (fullName === "") {
      nameError.textContent = "Full name is required.";
      nameError.style.display = "inline";
      return;
    }
  
    nameError.style.display = "none";
  
    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "inline";
      return;
    }
  
    emailError.style.display = "none";
  
    // GitHub Username Validation
    const username = document.getElementById("user-name").value.trim();
    const usernameError = document.getElementById("usernameError");
  
    if (username !== "" && !username.startsWith("@")) {
      usernameError.textContent = "GitHub username must start with @.";
      usernameError.style.display = "inline";
      return;
    }
  
    usernameError.style.display = "none";
  
    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    // Uncomment the following line to actually submit the form
    // document.getElementById("ticketForm").submit();
  }