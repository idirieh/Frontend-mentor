// Get all question div elements
const questionDivs = document.querySelectorAll(".question");

// Add click event listener to each question div
questionDivs.forEach((questionDiv) => {
  questionDiv.addEventListener("click", () => {
    // Toggle font size of the clicked question
    questionDiv.querySelector("p").classList.toggle("enlarged");

    // Toggle background color of the corresponding answer
    const answer = questionDiv.nextElementSibling;
    answer.classList.toggle("expanded");
  });
});
